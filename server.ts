/**
 * server.ts
 * Node.js + TypeScript server for Vercel deployment (ESM compatible)
 */

import expressPkg from 'express'; // import default for CommonJS module
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { z } from 'zod';

// Destructure types from express for TypeScript
const express = expressPkg.default ?? expressPkg;
type Request = import('express').Request;
type Response = import('express').Response;
type NextFunction = import('express').NextFunction;

// Load environment variables
dotenv.config();

// Validate required env vars
const envSchema = z.object({
  PROJECT_NAME: z.string(),
  VERSION: z.string(),
  DESCRIPTION: z.string().optional(),
  GITHUB_URL: z.string().url(),
  DEVELOPER_EMAIL: z.string().email(),
  WEBSITE_URL: z.string().url(),
  VERCEL_PROJECT_ID: z.string(),
});

const env = envSchema.safeParse(process.env);
if (!env.success) {
  console.error('Invalid environment variables:', env.error.format());
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Async error wrapper
const asyncHandler = (fn: any) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Health check
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', project: process.env.PROJECT_NAME });
});

// Project info endpoint
app.get('/api/project', (_req, res) => {
  res.json({
    name: process.env.PROJECT_NAME,
    version: process.env.VERSION,
    description: process.env.DESCRIPTION || 'N/A',
    github: process.env.GITHUB_URL,
    website: process.env.WEBSITE_URL,
    developer: process.env.DEVELOPER_EMAIL,
    vercelProjectId: process.env.VERCEL_PROJECT_ID,
  });
});

// Echo endpoint
app.post(
  '/api/echo',
  asyncHandler(async (req: Request, res: Response) => {
    res.json({ received: req.body });
  })
);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Local server
if (process.env.NODE_ENV !== 'vercel') {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

// Export for Vercel
export default app;
/**
 * server.ts
 * Node.js + TypeScript server for Vercel deployment (ESM compatible)
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as helmet from "helmet";
import morgan from "morgan";
import { z } from "zod";
import path from "path";
import type { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from "express";

// -------------------- ENVIRONMENT -------------------- //

dotenv.config();

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
  console.error("Invalid environment variables:", env.error.format());
  process.exit(1);
}

// -------------------- APP SETUP -------------------- //

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(process.cwd(), "dist");

// -------------------- MIDDLEWARES -------------------- //

app.use(helmet.default()); // ESM compatible
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// Async route wrapper
const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// -------------------- API ROUTES -------------------- //

app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", project: process.env.PROJECT_NAME });
});

app.get("/api/project", (_req: Request, res: Response) => {
  res.json({
    name: process.env.PROJECT_NAME,
    version: process.env.VERSION,
    description: process.env.DESCRIPTION || "N/A",
    github: process.env.GITHUB_URL,
    website: process.env.WEBSITE_URL,
    developer: process.env.DEVELOPER_EMAIL,
    vercelProjectId: process.env.VERCEL_PROJECT_ID,
  });
});

app.post(
  "/api/echo",
  asyncHandler(async (req: Request, res: Response) => {
    res.json({ received: req.body });
  })
);

// -------------------- STATIC FILES & SPA -------------------- //

app.use(express.static(DIST_PATH));

// SPA fallback (catch-all for non-API GET requests)
app.get(/^\/(?!api).*/, (_req: Request, res: Response) => {
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

// -------------------- ERROR HANDLING -------------------- //

// 404 for unknown API routes (regex-based)
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  next(); // allow SPA fallback
});

// Global error handler
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
};
app.use(errorHandler);

// -------------------- SERVER -------------------- //

if (process.env.NODE_ENV !== "vercel") {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

// Export for Vercel
export default app;

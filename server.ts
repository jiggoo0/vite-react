/**
 * server.ts
 * Node.js + TypeScript server for Vercel deployment (ESM compatible)
 */

import express from "express"; // runtime import
import type { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from "express"; // type-only import
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { z } from "zod";
import path from "path";

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

const config = env.data;

// -------------------- APP SETUP -------------------- //

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

// -------------------- MIDDLEWARES -------------------- //

app.use(
  helmet({
    contentSecurityPolicy: false, // ปิด CSP สำหรับ Vite HMR / inline scripts
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// -------------------- UTILITIES -------------------- //

const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// -------------------- API ROUTES -------------------- //

app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", project: config.PROJECT_NAME });
});

app.get("/api/project", (_req: Request, res: Response) => {
  res.json({
    name: config.PROJECT_NAME,
    version: config.VERSION,
    description: config.DESCRIPTION || "N/A",
    github: config.GITHUB_URL,
    website: config.WEBSITE_URL,
    developer: config.DEVELOPER_EMAIL,
    vercelProjectId: config.VERCEL_PROJECT_ID,
  });
});

app.post(
  "/api/echo",
  asyncHandler(async (req: Request, res: Response) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Received body:", req.body);
    }
    res.json({ received: req.body });
  })
);

// -------------------- STATIC FILES & SPA -------------------- //

app.use(express.static(DIST_PATH));

app.get(/^\/(?!api).*/, (_req, res) => {
  res.sendFile(path.resolve(DIST_PATH, "index.html"));
});

// -------------------- ERROR HANDLING -------------------- //

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  next();
});

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(JSON.stringify({ message: err.message, stack: err.stack }));
  res.status(500).json({ error: "Internal Server Error", message: err.message });
};
app.use(errorHandler);

// -------------------- SERVER -------------------- //

if (process.env.NODE_ENV !== "vercel") {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

// Export for Vercel
export default app;

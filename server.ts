// server.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { z } from "zod";
import dotenv from "dotenv";

// types only
import type { Request, Response, NextFunction } from "express";

// ============================
// Load Env
// ============================
dotenv.config();

// ============================
// Logger
// ============================
const logger = {
  debug: (msg: string, obj?: unknown) =>
    process.env.NODE_ENV !== "production" ? console.debug(msg, obj || "") : undefined,
  info: (msg: string, obj?: unknown) => console.info(msg, obj || ""),
  error: (msg: string, obj?: unknown) => console.error(msg, obj || ""),
};

// ============================
// Custom Error Type
// ============================
interface AppError extends Error {
  status?: number;
  code?: string;
  details?: unknown;
}

// ============================
// Environment Validation & Custom Env Object
// ============================
const envSchema = z.object({
  PROJECT_NAME: z.string(),
  VERSION: z.string(),
  DESCRIPTION: z.string().optional(),
  GITHUB_URL: z.string().url(),
  DEVELOPER_EMAIL: z.string().email(),
  WEBSITE_URL: z.string().url(),
  VERCEL_PROJECT_ID: z.string(),
});

const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
  console.error("❌ Invalid environment variables:", envResult.error.format());
  process.exit(1);
}

// Type-safe env object
interface MyEnv {
  PROJECT_NAME: string;
  VERSION: string;
  DESCRIPTION?: string;
  GITHUB_URL: string;
  DEVELOPER_EMAIL: string;
  WEBSITE_URL: string;
  VERCEL_PROJECT_ID: string;
}

const AppConfig: { processEnv: MyEnv } = {
  processEnv: {
    PROJECT_NAME: envResult.data.PROJECT_NAME,
    VERSION: envResult.data.VERSION,
    DESCRIPTION: envResult.data.DESCRIPTION,
    GITHUB_URL: envResult.data.GITHUB_URL,
    DEVELOPER_EMAIL: envResult.data.DEVELOPER_EMAIL,
    WEBSITE_URL: envResult.data.WEBSITE_URL,
    VERCEL_PROJECT_ID: envResult.data.VERCEL_PROJECT_ID,
  },
};

// ============================
// Express App Setup
// ============================
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

// ============================
// Middlewares
// ============================
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", (_req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// ============================
// Async Handler Wrapper
// ============================
const asyncHandler =
  <T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);

// ============================
// API Handlers
// ============================
const getProjectInfo = async (req: Request, res: Response) => {
  res.json({
    name: AppConfig.processEnv.PROJECT_NAME,
    version: AppConfig.processEnv.VERSION,
    description: AppConfig.processEnv.DESCRIPTION || "N/A",
    github: AppConfig.processEnv.GITHUB_URL,
    website: AppConfig.processEnv.WEBSITE_URL,
    developer: AppConfig.processEnv.DEVELOPER_EMAIL,
    vercelProjectId: AppConfig.processEnv.VERCEL_PROJECT_ID,
  });
};

const echoBody = async (req: Request, res: Response) => {
  logger.debug("Received body:", req.body);
  res.json({ received: req.body });
};

// ============================
// API Routes
// ============================
app.get("/api/health", (_req, res) =>
  res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);
app.get("/api/project", asyncHandler(getProjectInfo));
app.post("/api/echo", asyncHandler(echoBody));

// ============================
// Serve SPA
// ============================
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).*/, (_req, res) => {
  res.sendFile(path.resolve(DIST_PATH, "index.html"));
});

// ============================
// 404 Handler
// ============================
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  next();
});

// ============================
// Global Error Handler
// ============================
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const error = err as AppError;
  logger.error("❌ Error caught:", {
    message: error.message,
    stack: error.stack,
    code: error.code,
    details: error.details,
  });
  res.status(error.status ?? 500).json({
    error: "Internal Server Error",
    message: error.message,
    code: error.code,
    details: error.details,
  });
});

// ============================
// Start Server (Local only, skip on Vercel)
// ============================
if (process.env.NODE_ENV !== "vercel") {
  app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));
}

// ✅ Export both AppConfig and app
export { AppConfig };
export default app;

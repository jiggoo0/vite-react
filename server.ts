// server.ts
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { WebSocketServer } from "ws";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { z } from "zod";
import { initChat, getMessages } from "./src/api/Chat.ts";
import "dotenv/config";

// -------- Config & Env --------
const envSchema = z.object({
  PROJECT_NAME: z.string(),
  VERSION: z.string(),
  DESCRIPTION: z.string().optional(),
  GITHUB_URL: z.string().url(),
  DEVELOPER_EMAIL: z.string().email(),
  WEBSITE_URL: z.string().url(),
  VERCEL_PROJECT_ID: z.string(),
  PORT: z.string().optional(),
  NODE_ENV: z.string().optional(),
});

const envResult = envSchema.safeParse(process.env);
if (!envResult.success) {
  console.error("❌ Invalid environment variables:", envResult.error.format());
  process.exit(1);
}

type MyEnv = z.infer<typeof envSchema>;
const AppConfig: { processEnv: MyEnv } = { processEnv: envResult.data };

// -------- Express setup --------
const app = express();
const PORT = Number(AppConfig.processEnv.PORT ?? 3000);
const DIST_PATH = path.resolve(process.cwd(), "dist");

app.use(
  helmet({
    contentSecurityPolicy: AppConfig.processEnv.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (AppConfig.processEnv.NODE_ENV !== "production") app.use(morgan("dev"));

// -------- Logger --------
const logger = {
  debug: (msg: string, obj?: unknown) =>
    AppConfig.processEnv.NODE_ENV !== "production" ? console.debug(msg, obj ?? "") : undefined,
  info: (msg: string, obj?: unknown) => console.info(msg, obj ?? ""),
  error: (msg: string, obj?: unknown) => console.error(msg, obj ?? ""),
};

// -------- Async wrapper --------
const asyncHandler =
  <T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);

// -------- REST routes --------
app.get("/api/health", (_req, res) =>
  res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);

app.get(
  "/api/project",
  asyncHandler(async (_req, res) => res.json(AppConfig.processEnv))
);

app.post(
  "/api/echo",
  asyncHandler(async (req, res) => res.json({ received: req.body }))
);

// Chat REST endpoint
app.get("/api/messages", getMessages);

// -------- Serve SPA --------
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// -------- WebSocket setup --------
const server = app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));

const wss = new WebSocketServer({ server });
initChat(wss);

// -------- Global error handler --------
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const error = err as { message?: string };
  logger.error("❌ Error caught:", error.message ?? err);
  res.status(500).json({
    error: "Internal Server Error",
    message: error.message ?? "Unknown error",
  });
});

export { AppConfig };
export default app;

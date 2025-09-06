// server.ts
import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import { z } from "zod";
import { chatAPI } from "./src/api/Chat.ts";
import { WebSocketServer, WebSocket } from "ws";

dotenv.config();

type AppError = Error & { status?: number; code?: string; details?: unknown };

// Logger
const logger = {
  debug: (msg: string, obj?: unknown) =>
    process.env.NODE_ENV !== "production" ? console.debug(msg, obj ?? "") : undefined,
  info: (msg: string, obj?: unknown) => console.info(msg, obj ?? ""),
  error: (msg: string, obj?: unknown) => console.error(msg, obj ?? ""),
};

// Validate env
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
type MyEnv = z.infer<typeof envSchema>;
const AppConfig: { processEnv: MyEnv } = { processEnv: envResult.data };

// Express setup
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

app.use(
  helmet({ contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", (_req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Async wrapper
const asyncHandler =
  <T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);

// Routes
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

// Chat API
app.get(
  "/api/chat/messages",
  asyncHandler(async (_req, res) => {
    const messages = await chatAPI.getMessages();
    res.json({ messages });
  })
);

app.post(
  "/api/chat/send",
  asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== "string")
      return res.status(400).json({ error: "text is required" });
    const sent = await chatAPI.sendMessage(text);
    broadcastWS({ type: "new_message", payload: sent }); // ส่งผ่าน WebSocket
    res.json({ sent });
  })
);

app.delete(
  "/api/chat/clear",
  asyncHandler(async (_req, res) => {
    await chatAPI.clearMessages();
    broadcastWS({ type: "clear_messages" });
    res.json({ status: "cleared" });
  })
);

// Serve SPA
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// 404 + Global error handler
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) return res.status(404).json({ error: "API route not found" });
  next();
});

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

// WebSocket setup
const wss = new WebSocketServer({ noServer: true });
const clients = new Set<WebSocket>();

const broadcastWS = (data: unknown) => {
  const msg = JSON.stringify(data);
  clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) ws.send(msg);
  });
};

// Integrate WebSocket with Express server
const server = app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));

server.on("upgrade", (request, socket, head) => {
  if (!request.url?.startsWith("/ws")) {
    socket.destroy();
    return;
  }
  wss.handleUpgrade(request, socket, head, (ws) => {
    clients.add(ws);
    ws.on("message", async (msg) => {
      try {
        const data = msg.toString();
        const sent = await chatAPI.sendMessage(data);
        broadcastWS({ type: "new_message", payload: sent });
      } catch (err) {
        logger.error("WebSocket send error", err);
      }
    });
    ws.on("close", () => clients.delete(ws));
  });
});

export { AppConfig, broadcastWS };
export default app;

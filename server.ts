import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { z } from "zod";

dotenv.config();

// --- Express types ---
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

// --- Custom Error Type ---
interface AppError extends Error {
  status?: number;
}

// --- Validate environment variables ---
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

// --- Express Setup ---
const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

// --- Middlewares ---
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// --- Async wrapper ---
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };

// --- Handlers ---
const getProjectInfo = async (req: Request, res: Response) => {
  res.json({
    name: config.PROJECT_NAME,
    version: config.VERSION,
    description: config.DESCRIPTION || "N/A",
    github: config.GITHUB_URL,
    website: config.WEBSITE_URL,
    developer: config.DEVELOPER_EMAIL,
    vercelProjectId: config.VERCEL_PROJECT_ID,
  });
};

const echoBody = async (req: Request, res: Response) => {
  if (process.env.NODE_ENV !== "production") console.log("Received body:", req.body);
  res.json({ received: req.body });
};

// --- API Routes ---
app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", project: config.PROJECT_NAME });
});

app.get("/api/project", asyncHandler(getProjectInfo));
app.post("/api/echo", asyncHandler(echoBody));

// --- Serve SPA ---
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).*/, (_req: Request, res: Response) => {
  res.sendFile(path.resolve(DIST_PATH, "index.html"));
});

// --- 404 Handler ---
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  next();
});

// --- Global Error Handler ---
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const error = err as AppError;
  console.error(JSON.stringify({ message: error.message, stack: error.stack }));
  res.status(error.status || 500).json({
    error: "Internal Server Error",
    message: error.message,
  });
});

// --- Start Server ---
if (process.env.NODE_ENV !== "vercel") {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

export default app;

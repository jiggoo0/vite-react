เมื่อได้รับข้อความทั้งหมดสรุปตามหัว
เป้าหมายหลัก:
สร้าง แก้ไข ปรับแต่ง React + TypeScript + Vite + TailwindCSS/DaisyUI components ให้เป็น Production-ready, Type-safe, Minimal UI, Flat UI, Enterprise-grade
แนวทางการทำงาน:
ทำงานแบบ DEV-to-DEV
ตรวจสอบและแก้ไขโค้ดให้ตรงตามวัตถุประสงค์, ป้องกันข้อผิดพลาด
ส่งกลับโค้ด พร้อมใช้งานและ format เรียบร้อย
แนะนำทันทีหากต้องปรับปรุงเร่งด่วน
กฎเข้มงวด:
ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
การแยกไฟล์หรือสร้างไฟล์ใหม่ทำได้ถ้าชัดเจนและช่วยประสิทธิภาพ
ยึด ESLint, TypeScript strict, Production-ready practices
เน้น ความแม่นยำสูง ในการจัดการ Components และ Hooks
AI สามารถ:
เข้าใจโครงสร้างโปรเจกต์ Vite + React + TypeScript จากรายละเอียด tree และ config
ตรวจสอบ dependencies, config files, alias, project info, project tree
สร้างสรุปรายงาน Markdown อัตโนมัติ (เหมือนสคริปต์ NOTEDEVSEO_SUMMARY.md)
ตั้งค่าไฟล์ต่าง ๆ ตรวจสอบให้ใช้งานได้ถูกต้อง
คำสั่งสร้าง home::/data/data/com.termux/files/home/project/src/api/Chat.ts
ที่สามารถใช้งาน สนทนาตอบแชท Realtime คู่กับ
home::/data/data/com.termux/files/home/project/src/utils/common/ChatWidget.tsx
code ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { chatAPI, ChatMessage } from "@/api/Chat";

interface ChatWidgetProps {
autoCloseMs?: number;
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState<ChatMessage[]>([]);
const [input, setInput] = useState("");
const autoCloseTimer = useRef<number | null>(null);
const widgetRef = useRef<HTMLDivElement>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

// Auto-close
useEffect(() => {
if (isOpen) {
autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
}
return () => {
if (autoCloseTimer.current) {
clearTimeout(autoCloseTimer.current);
autoCloseTimer.current = null;
}
};
}, [isOpen, autoCloseMs]);

// Close with Escape
useEffect(() => {
const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
window.addEventListener("keydown", handleKey);
return () => window.removeEventListener("keydown", handleKey);
}, []);

// Realtime subscription
useEffect(() => {
const unsubscribe = chatAPI.subscribe(setMessages);
return () => unsubscribe();
}, []);

const handleSend = async () => {
if (!input.trim()) return;
await chatAPI.sendMessage(input.trim());
setInput("");
};

return (
<div ref={widgetRef} className="fixed bottom-4 right-4 z-50">
<button
        onClick={toggleChat}
        className="p-3 rounded-full bg-primary text-white shadow-lg hover:scale-105 transition-transform"
      >
<MessageCircle size={24} />
</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-14 right-0 w-80 bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col"
          >
            <div className="p-3 border-b font-semibold">Chat</div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    m.sender === "user"
                      ? "ml-auto bg-primary text-white"
                      : "mr-auto bg-base-200"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="flex p-2 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 input input-sm input-bordered rounded-l-lg"
                placeholder="พิมพ์ข้อความ..."
              />
              <button
                onClick={handleSend}
                className="btn btn-sm btn-primary rounded-l-none"
              >
                ส่ง
              </button>
            </div>
            <div className="p-2 border-t">
              <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

);
};

export default ChatWidget;

home::/data/data/com.termux/files/home/project/server.ts// server.ts
// server.ts
import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import { z } from "zod";
import { chatAPI } from "./src/api/Chat.ts"; // single Chat module

dotenv.config();

type AppError = Error & { status?: number; code?: string; details?: unknown };

// ============================
// Logger
// ============================
const logger = {
debug: (msg: string, obj?: unknown) =>
process.env.NODE_ENV !== "production" ? console.debug(msg, obj ?? "") : undefined,
info: (msg: string, obj?: unknown) => console.info(msg, obj ?? ""),
error: (msg: string, obj?: unknown) => console.error(msg, obj ?? ""),
};

// ============================
// Environment validation
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
type MyEnv = z.infer<typeof envSchema>;
const AppConfig: { processEnv: MyEnv } = { processEnv: envResult.data };

// ============================
// Express setup
// ============================
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

app.use(
helmet({ contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", (\_req, res, next) => {
res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
next();
});
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// ============================
// Async wrapper
// ============================
const asyncHandler =
<T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
(req: Request, res: Response, next: NextFunction) =>
fn(req, res, next).catch(next);

// ============================
// API Routes
// ============================

// Health
app.get("/api/health", (\_req, res) =>
res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);

// Project info
app.get("/api/project", asyncHandler(async (\_req, res) => res.json(AppConfig.processEnv)));

// Echo
app.post("/api/echo", asyncHandler(async (req, res) => res.json({ received: req.body })));

// Chat API
app.get("/api/Chat/messages", asyncHandler(async (\_req, res) => {
const messages = await chatAPI.getMessages();
res.json({ messages });
}));

app.post("/api/Chat/send", asyncHandler(async (req, res) => {
const { text } = req.body;
if (!text || typeof text !== "string")
return res.status(400).json({ error: "text is required" });
const sent = await chatAPI.sendMessage(text);
res.json({ sent });
}));

app.delete("/api/Chat/clear", asyncHandler(async (\_req, res) => {
await chatAPI.clearMessages();
res.json({ status: "cleared" });
}));

app.get("/api/Chat", asyncHandler(async (\_req, res) => {
const messages = await chatAPI.getMessages();
res.json({ messages });
}));

// ============================
// Serve SPA
// ============================
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// ============================
// 404 + Global error handler
// ============================
app.use((req, res, next) => {
if (req.path.startsWith("/api")) return res.status(404).json({ error: "API route not found" });
next();
});

app.use((err: unknown, \_req: Request, res: Response, \_next: NextFunction) => {
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
// Start server
// ============================
if (process.env.NODE_ENV !== "vercel") {
app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));
}

export { AppConfig };
export default app;

home::/data/data/com.termux/files/home/project/src/api/Chat.ts
// src/api/Chat.ts
export interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
timestamp: number;
}

type Listener = (messages: ChatMessage[]) => void;

// shared store
const messageStore: ChatMessage[] = [];
const listeners = new Set<Listener>();

/\*\*

- Broadcast snapshot ไปยังทุก subscriber
  \*/
  function notifyAll() {
  const snapshot = structuredClone(messageStore);
  for (const cb of listeners) cb(snapshot);
  }

export const chatAPI = {
/\*\*

- ส่งข้อความจาก user + trigger bot mock reply
  \*/
  async sendMessage(text: string): Promise<ChatMessage> {
  const userMsg: ChatMessage = {
  id: crypto.randomUUID(),
  sender: "user",
  text,
  timestamp: Date.now(),
  };
  messageStore.push(userMsg);
  notifyAll();


    // mock bot reply (0.8s delay)
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        sender: "bot",
        text: `🤖 ตอบกลับ: ${text}`,
        timestamp: Date.now(),
      };
      messageStore.push(botMsg);
      notifyAll();
    }, 800);

    return userMsg;

},

/\*\*

- คืนข้อความทั้งหมด
  \*/
  async getMessages(): Promise<ChatMessage[]> {
  return structuredClone(messageStore);
  },

/\*\*

- ล้างข้อความทั้งหมด
  \*/
  async clearMessages(): Promise<void> {
  messageStore.length = 0; // reset store
  notifyAll();
  },

/\*\*

- subscribe realtime messages
  \*/
  subscribe(cb: Listener): () => void {
  listeners.add(cb);
  cb(structuredClone(messageStore));
  return () => listeners.delete(cb);
  },
  };

─ api │   ├── Chat │   │   ├── index.ts │   │   ├── messages.ts │   │   ├── send.ts │   │   └── types.ts │   ├── Chat.ts │   ├── echo.ts │   └── project.ts

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ

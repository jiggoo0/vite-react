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
app.use("/api", (\_req, res, next) => {
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
app.get("/api/health", (\_req, res) =>
res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);

app.get(
"/api/project",
asyncHandler(async (\_req, res) => res.json(AppConfig.processEnv))
);

app.post(
"/api/echo",
asyncHandler(async (req, res) => res.json({ received: req.body }))
);

// Chat API
app.get(
"/api/chat/messages",
asyncHandler(async (\_req, res) => {
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
asyncHandler(async (\_req, res) => {
await chatAPI.clearMessages();
broadcastWS({ type: "clear_messages" });
res.json({ status: "cleared" });
})
);

// Serve SPA
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// 404 + Global error handler
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

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useChat } from "@/api/useChat";

interface ChatWidgetProps {
autoCloseMs?: number;
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
const { messages, send } = useChat();
const [isOpen, setIsOpen] = useState(false);
const [input, setInput] = useState("");
const autoCloseTimer = useRef<number | null>(null);
const scrollRef = useRef<HTMLDivElement>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

useEffect(() => {
if (isOpen) {
autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
}
return () => {
if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
autoCloseTimer.current = null;
};
}, [isOpen, autoCloseMs]);

useEffect(() => {
const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
window.addEventListener("keydown", handleKey);
return () => window.removeEventListener("keydown", handleKey);
}, []);

useEffect(() => {
scrollRef.current?.scrollTo({
top: scrollRef.current.scrollHeight,
behavior: "smooth",
});
}, [messages]);

const handleSend = async () => {
if (!input.trim()) return;
await send(input.trim());
setInput("");
};

return (

<div className="fixed bottom-4 right-4 z-50">
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

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    m.sender === "user" ? "ml-auto bg-primary text-white" : "mr-auto bg-base-200"
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
              <button onClick={handleSend} className="btn btn-sm btn-primary rounded-l-none">
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

import { useState, useEffect, useCallback, useRef } from "react";

export interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
}

interface UseChatReturn {
messages: ChatMessage[];
send: (text: string) => Promise<void>;
}

const WS_URL = "wss://your-websocket-server"; // เปลี่ยนเป็น URL จริง

export const useChat = (): UseChatReturn => {
const [messages, setMessages] = useState<ChatMessage[]>([]);
const wsRef = useRef<WebSocket | null>(null);

// Connect to WebSocket
useEffect(() => {
const ws = new WebSocket(WS_URL);
wsRef.current = ws;

    ws.addEventListener("message", (event) => {
      try {
        const msg: ChatMessage = JSON.parse(event.data);
        setMessages((prev) => [...prev, msg]);
      } catch {
        console.warn("Invalid message format", event.data);
      }
    });

    ws.addEventListener("close", () => console.log("WebSocket closed"));
    ws.addEventListener("error", (err) => console.error("WebSocket error", err));

    return () => {
      ws.close();
    };

}, []);

const send = useCallback(async (text: string) => {
const msg: ChatMessage = { id: crypto.randomUUID(), sender: "user", text };
setMessages((prev) => [...prev, msg]);
if (wsRef.current?.readyState === WebSocket.OPEN) {
wsRef.current.send(JSON.stringify(msg));
}
}, []);

return { messages, send };
};

// src/api/Chat.ts
import { v4 as uuidv4 } from "uuid";

export interface ChatMessage {
id: string;
text: string;
createdAt: number;
from: "user" | "bot";
}

class ChatAPI {
private messages: ChatMessage[] = [];

async getMessages(): Promise<ChatMessage[]> {
// Return last 50 messages
return this.messages.slice(-50);
}

async sendMessage(text: string, from: "user" | "bot" = "user"): Promise<ChatMessage> {
const message: ChatMessage = {
id: uuidv4(),
text,
createdAt: Date.now(),
from,
};
this.messages.push(message);

    // Simulate bot response after delay
    if (from === "user") {
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: uuidv4(),
          text: `ตอบกลับ: ${text}`,
          createdAt: Date.now(),
          from: "bot",
        };
        this.messages.push(botMessage);
      }, 1000);
    }

    return message;

}

async clearMessages(): Promise<void> {
this.messages = [];
}
}

export const chatAPI = new ChatAPI();

// React hook
import { useState, useEffect, useCallback } from "react";

export const useChat = () => {
const [messages, setMessages] = useState<ChatMessage[]>([]);

const refreshMessages = useCallback(async () => {
const msgs = await chatAPI.getMessages();
setMessages([...msgs]);
}, []);

const send = useCallback(
async (text: string) => {
await chatAPI.sendMessage(text);
await refreshMessages();
},
[refreshMessages]
);

useEffect(() => {
refreshMessages();
const interval = setInterval(refreshMessages, 2000); // poll every 2s
return () => clearInterval(interval);
}, [refreshMessages]);

return { messages, send, refreshMessages };
};

─ api │   ├── Chat │   │   ├── index.ts │   │   ├── messages.ts │   │   ├── send.ts │   │   └── types.ts │   ├── Chat.ts │   ├── echo.ts │   └── project.ts
useChat.ts

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ

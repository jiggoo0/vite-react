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
code ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบันimport
import { WebSocketServer, WebSocket } from "ws";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export interface ChatMessage {
id: string;
user: string; // 'user' | 'bot'
text: string;
createdAt: number;
}

const clients = new Set<WebSocket>();
const messages: ChatMessage[] = [];

export function initChat(wss: WebSocketServer) {
wss.on("connection", (ws) => {
clients.add(ws);

    // ส่ง history
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    ws.on("message", (raw) => {
      try {
        const data = JSON.parse(raw.toString());
        const schema = z.object({ user: z.string().min(1), text: z.string().min(1) });
        const parsed = schema.parse(data);

        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          user: parsed.user,
          text: parsed.text,
          createdAt: Date.now(),
        };
        messages.push(msg);
        broadcast({ type: "message", payload: [msg] });

        // Bot auto-reply
        if (parsed.user === "user") {
          setTimeout(() => {
            const botMsg: ChatMessage = {
              id: crypto.randomUUID(),
              user: "bot",
              text: generateBotReply(parsed.text),
              createdAt: Date.now(),
            };
            messages.push(botMsg);
            broadcast({ type: "message", payload: [botMsg] });
          }, 500);
        }
      } catch {
        ws.send(JSON.stringify({ type: "error", error: "Invalid message" }));
      }
    });

    ws.on("close", () => clients.delete(ws));

});
}

function broadcast(data: unknown) {
const payload = JSON.stringify(data);
clients.forEach((client) => {
if (client.readyState === WebSocket.OPEN) client.send(payload);
});
}

export function getMessages(\_req: Request, res: Response, \_next: NextFunction) {
res.json(messages);
}

function generateBotReply(text: string): string {
const lower = text.toLowerCase();
if (lower.includes("hi") || lower.includes("hello") || lower.includes("สวัสดี"))
return "สวัสดีครับ! 👋";
if (lower.includes("ชื่อ")) return "ผมคือ Bot 🤖 ยินดีที่ได้รู้จัก!";
if (lower.includes("ขอบคุณ")) return "ยินดีครับ 🙏";
return `คุณพิมพ์ว่า: "${text}" ใช่ไหมครับ?`;
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";

interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
timestamp: number;
}

interface WSMessagePayload {
id: string;
user: "user" | "bot";
text: string;
createdAt: number;
}

interface ChatWidgetProps {
autoCloseMs?: number;
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
const [messages, setMessages] = useState<ChatMessage[]>([]);
const [input, setInput] = useState("");
const [isOpen, setIsOpen] = useState(false);

const wsRef = useRef<WebSocket | null>(null);
const scrollRef = useRef<HTMLDivElement>(null);
const autoCloseTimer = useRef<number | null>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

// Auto-close chat
useEffect(() => {
if (isOpen) autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
return () => {
if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
autoCloseTimer.current = null;
};
}, [isOpen, autoCloseMs]);

// Close on Escape key
useEffect(() => {
const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
window.addEventListener("keydown", handleKey);
return () => window.removeEventListener("keydown", handleKey);
}, []);

// Auto-scroll on new messages
useEffect(() => {
scrollRef.current?.scrollTo({
top: scrollRef.current.scrollHeight,
behavior: "smooth",
});
}, [messages]);

// WebSocket connection
useEffect(() => {
const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const ws = new WebSocket(`${protocol}://${window.location.host}`);
wsRef.current = ws;

    ws.onopen = () => console.log("✅ WS connected");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "history" || data.type === "message") {
          const payload = Array.isArray(data.payload) ? data.payload : [data.payload];
          const mapped: ChatMessage[] = payload.map((m: WSMessagePayload) => ({
            id: m.id,
            sender: m.user === "user" ? "user" : "bot",
            text: m.text,
            timestamp: m.createdAt,
          }));
          setMessages((prev) => [...prev, ...mapped]);
        } else if (data.type === "error") {
          console.error("WS error:", data.error);
        }
      } catch (err) {
        console.error("❌ Failed to parse WS message", err);
      }
    };

    ws.onclose = () => console.log("⚡ WS closed");
    ws.onerror = (err) => console.error("⚡ WS error", err);

    return () => ws.close();

}, []);

// Send message
const handleSend = () => {
const text = input.trim();
if (!text) return;

    const msg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, msg]);
    wsRef.current?.send(JSON.stringify({ user: "user", text }));
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
            key="chat-widget"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-14 right-0 w-80 bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col"
          >
            <div className="p-3 border-b font-semibold">Chat</div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user" ? "ml-auto bg-primary text-white" : "mr-auto bg-base-200"
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
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

// src/api/useChat.ts
import { useEffect, useState, useRef, useCallback } from "react";

export interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
timestamp: number; // ใช้ timestamp แทน createdAt
}

interface WSChatMessage {
id: string;
user: string;
text: string;
timestamp: number;
}

interface WSMessageEvent {
type: "history" | "message" | "error";
payload: WSChatMessage | WSChatMessage[];
error?: string;
}

function mapPayloadToMessages(payload: WSChatMessage | WSChatMessage[]): ChatMessage[] {
const arr = Array.isArray(payload) ? payload : [payload];
return arr.map((m) => ({
id: m.id,
sender: m.user === "user" ? "user" : "bot",
text: m.text,
timestamp: m.timestamp,
}));
}

export function useChat() {
const [messages, setMessages] = useState<ChatMessage[]>([]);
const wsRef = useRef<WebSocket | null>(null);

// Connect WebSocket
useEffect(() => {
const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const ws = new WebSocket(`${protocol}://${window.location.host}`);
wsRef.current = ws;

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data: WSMessageEvent = JSON.parse(event.data);

        switch (data.type) {
          case "history":
            setMessages(mapPayloadToMessages(data.payload));
            break;
          case "message":
            setMessages((prev) => [...prev, ...mapPayloadToMessages(data.payload)]);
            break;
          case "error":
            console.error("WS error:", data.error);
            break;
        }
      } catch (err) {
        console.error("Failed to parse WS message", err);
      }
    };

    ws.onclose = () => console.log("Chat WS closed");
    ws.onerror = (e) => console.error("Chat WS error", e);

    return () => ws.close();

}, []);

const send = useCallback(async (text: string) => {
const cleanText = text.trim();
if (!cleanText) return;

    const tempMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text: cleanText,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, tempMsg]);

    try {
      wsRef.current?.send(JSON.stringify({ user: "user", text: cleanText }));
    } catch {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "user", text: cleanText }),
      });
    }

}, []);

return { messages, send };
}

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

// Chat REST endpoint
app.get("/api/messages", getMessages);

// -------- Serve SPA --------
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// -------- WebSocket setup --------
const server = app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));

const wss = new WebSocketServer({ server });
initChat(wss);

// -------- Global error handler --------
app.use((err: unknown, \_req: Request, res: Response, \_next: NextFunction) => {
const error = err as { message?: string };
logger.error("❌ Error caught:", error.message ?? err);
res.status(500).json({
error: "Internal Server Error",
message: error.message ?? "Unknown error",
});
});

export { AppConfig };
export default app;

import { WebSocketServer, WebSocket } from "ws";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export interface ChatMessage {
id: string;
user: string; // 'user' | 'bot'
text: string;
createdAt: number;
}

const clients = new Set<WebSocket>();
const messages: ChatMessage[] = [];

export function initChat(wss: WebSocketServer) {
wss.on("connection", (ws) => {
clients.add(ws);

    // ส่ง history
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    ws.on("message", (raw) => {
      try {
        const data = JSON.parse(raw.toString());
        const schema = z.object({ user: z.string().min(1), text: z.string().min(1) });
        const parsed = schema.parse(data);

        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          user: parsed.user,
          text: parsed.text,
          createdAt: Date.now(),
        };
        messages.push(msg);
        broadcast({ type: "message", payload: [msg] });

        // Bot auto-reply
        if (parsed.user === "user") {
          setTimeout(() => {
            const botMsg: ChatMessage = {
              id: crypto.randomUUID(),
              user: "bot",
              text: generateBotReply(parsed.text),
              createdAt: Date.now(),
            };
            messages.push(botMsg);
            broadcast({ type: "message", payload: [botMsg] });
          }, 500);
        }
      } catch {
        ws.send(JSON.stringify({ type: "error", error: "Invalid message" }));
      }
    });

    ws.on("close", () => clients.delete(ws));

});
}

function broadcast(data: unknown) {
const payload = JSON.stringify(data);
clients.forEach((client) => {
if (client.readyState === WebSocket.OPEN) client.send(payload);
});
}

export function getMessages(\_req: Request, res: Response, \_next: NextFunction) {
res.json(messages);
}

function generateBotReply(text: string): string {
const lower = text.toLowerCase();
if (lower.includes("hi") || lower.includes("hello") || lower.includes("สวัสดี"))
return "สวัสดีครับ! 👋";
if (lower.includes("ชื่อ")) return "ผมคือ Bot 🤖 ยินดีที่ได้รู้จัก!";
if (lower.includes("ขอบคุณ")) return "ยินดีครับ 🙏";
return `คุณพิมพ์ว่า: "${text}" ใช่ไหมครับ?`;
}

─ api │   ├── Chat │   │   ├── index.ts │   │   ├── messages.ts │   │   ├── send.ts │   │   └── types.ts │   ├── Chat.ts │   ├── echo.ts │   └── project.ts
useChat.ts

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ

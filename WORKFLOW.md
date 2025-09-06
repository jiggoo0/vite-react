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

interface ChatWidgetProps {
autoCloseMs?: number; // เวลาปิดอัตโนมัติ (มิลลิวินาที)
}

/\*\*

- 📬 ChatWidget
-
- - Floating button สำหรับติดต่อผ่านโซเชียล
- - เปิด/ปิดด้วย click หรือ Escape key
- - Auto-close หลัง 15 วินาที (ปรับได้)
- - Smooth animation, responsive, dark mode ready
    \*/
    const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const autoCloseTimer = useRef<number | null>(null);
    const widgetRef = useRef<HTMLDivElement>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

// ปิด widget อัตโนมัติหลังเวลา autoCloseMs
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

// ปิดด้วย Escape key
useEffect(() => {
const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === "Escape") setIsOpen(false);
};
window.addEventListener("keydown", handleKeyDown);
return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

// Focus widget เมื่อเปิด
useEffect(() => {
if (isOpen && widgetRef.current) {
widgetRef.current.focus();
}
}, [isOpen]);

return (

<div className="fixed bottom-5 right-5 z-[9999]">
<AnimatePresence>
{isOpen && (
<motion.div
ref={widgetRef}
tabIndex={-1}
role="dialog"
aria-modal="true"
aria-label="ช่องทางติดต่อ"
initial={{ opacity: 0, y: 50, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 50, scale: 0.95 }}
transition={{ duration: 0.25 }}
className="w-80 max-w-[90vw] rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl p-5 text-center space-y-4 focus:outline-none" >
<p className="text-base font-semibold text-gray-800 dark:text-gray-200">
ติดต่อเราผ่านช่องทางโซเชียล
</p>

            <SocialIcons />

            <button
              onClick={toggleChat}
              type="button"
              className="w-full rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              ปิด
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          type="button"
          aria-label="เปิดช่องทางติดต่อ"
          aria-expanded={isOpen}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white dark:bg-primary-dark shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>

);
};

export default ChatWidget;

home::/data/data/com.termux/files/home/project/server.ts// server.ts
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
app.use("/api", (\_req, res, next) => {
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
app.get("/api/health", (\_req, res) =>
res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);
app.get("/api/project", asyncHandler(getProjectInfo));
app.post("/api/echo", asyncHandler(echoBody));

// ============================
// Serve SPA
// ============================
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => {
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
// Start Server (Local only, skip on Vercel)
// ============================
if (process.env.NODE_ENV !== "vercel") {
app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));
}

// ✅ Export both AppConfig and app
export { AppConfig };
export default app;

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ

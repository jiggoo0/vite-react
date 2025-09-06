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

export function getMessages(_req: Request, res: Response, _next: NextFunction) {
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

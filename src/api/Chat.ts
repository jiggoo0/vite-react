// src/api/Chat.ts
import type { Request, Response, NextFunction } from "express";
import { WebSocketServer, WebSocket } from "ws";
import { z } from "zod";

export interface ChatMessage {
  id: string;
  user: string;
  text: string;
  createdAt: number;
}

// Set ของ WebSocket clients
const clients = new Set<WebSocket>();

// In-memory store ของข้อความ
const messages: ChatMessage[] = [];

/**
 * Initialize WebSocket chat server
 */
export function initChat(wss: WebSocketServer) {
  wss.on("connection", (ws) => {
    clients.add(ws);

    // ส่ง history ให้ client ใหม่
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    ws.on("message", (raw) => {
      try {
        const data = JSON.parse(raw.toString());

        const schema = z.object({
          user: z.string().min(1),
          text: z.string().min(1),
        });

        const parsed = schema.parse(data);

        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          user: parsed.user,
          text: parsed.text,
          createdAt: Date.now(),
        };

        // เก็บข้อความและ broadcast
        messages.push(msg);
        broadcast({ type: "message", payload: msg });
      } catch {
        // ส่งข้อความ error แบบ generic
        ws.send(JSON.stringify({ type: "error", error: "Invalid message" }));
      }
    });

    ws.on("close", () => {
      clients.delete(ws);
    });
  });
}

/**
 * Broadcast ข้อมูลให้ทุก client
 */
function broadcast(data: unknown) {
  const payload = JSON.stringify(data);
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

/**
 * REST endpoint สำหรับดึงข้อความทั้งหมด
 */
export function getMessages(_req: Request, res: Response, _next: NextFunction) {
  res.json(messages);
}

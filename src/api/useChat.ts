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

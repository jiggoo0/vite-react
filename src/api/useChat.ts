import { useEffect, useState, useRef, useCallback } from "react";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  createdAt: number;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  // Connect to WebSocket
  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const ws = new WebSocket(`${protocol}://${window.location.host}`);
    wsRef.current = ws;

    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.type === "history") {
        setMessages(data.payload);
      } else if (data.type === "message") {
        setMessages((prev) => [...prev, data.payload]);
      }
    };

    ws.onclose = () => console.log("Chat WS closed");
    ws.onerror = (e) => console.error("Chat WS error", e);

    return () => ws.close();
  }, []);

  // Send message
  const send = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const tempMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      createdAt: Date.now(),
    };

    // Optimistic update
    setMessages((prev) => [...prev, tempMsg]);

    try {
      wsRef.current?.send(JSON.stringify({ user: "user", text }));
    } catch (err) {
      console.error("Send failed, fallback to REST", err);
      await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "user", text }),
      });
    }
  }, []);

  return { messages, send };
}

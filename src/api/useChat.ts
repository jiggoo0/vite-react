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

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

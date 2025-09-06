"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useChat, ChatMessage } from "@/api/useChat";

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

  // Auto-close timer
  useEffect(() => {
    if (isOpen) {
      autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
    }
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

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    await send(text);
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
              {messages.map((msg: ChatMessage) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user" ? "ml-auto bg-primary text-white" : "mr-auto bg-base-200"
                  }`}
                >
                  {msg.text}
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

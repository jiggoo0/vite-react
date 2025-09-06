"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { chatAPI, ChatMessage } from "@/api/Chat";

interface ChatWidgetProps {
  autoCloseMs?: number;
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const autoCloseTimer = useRef<number | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  // Auto-close
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

  // Close with Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Realtime subscription
  useEffect(() => {
    const unsubscribe = chatAPI.subscribe(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    await chatAPI.sendMessage(input.trim());
    setInput("");
  };

  return (
    <div ref={widgetRef} className="fixed bottom-4 right-4 z-50">
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
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
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

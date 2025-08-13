"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import SocialIcons from "./SocialIcons";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const autoCloseTimer = useRef<number | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // ปิดอัตโนมัติ 15 วินาที
  useEffect(() => {
    if (isOpen) {
      autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), 15000);
    }
    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, [isOpen]);

  // ปิดด้วย Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // โฟกัส widget เมื่อเปิด
  useEffect(() => {
    if (isOpen && widgetRef.current) {
      widgetRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen && (
        <div
          ref={widgetRef}
          tabIndex={-1}
          role="dialog"
          aria-label="ช่องทางติดต่อ"
          className="w-80 max-w-[90vw] rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl p-5 text-center space-y-4 transform transition-all duration-300 ease-out animate-fadeInUp"
        >
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
        </div>
      )}
      {!isOpen && (
        <button
          onClick={toggleChat}
          type="button"
          aria-label="เปิดช่องทางติดต่อ"
          aria-expanded={isOpen}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white dark:bg-primary-dark shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

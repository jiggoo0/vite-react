"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";

interface ChatWidgetProps {
  autoCloseMs?: number; // เวลาปิดอัตโนมัติ (มิลลิวินาที)
}

/**
 * 📬 ChatWidget
 *
 * - Floating button สำหรับติดต่อผ่านโซเชียล
 * - เปิด/ปิดด้วย click หรือ Escape key
 * - Auto-close หลัง 15 วินาที (ปรับได้)
 * - Smooth animation, responsive, dark mode ready
 */
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
            className="w-80 max-w-[90vw] rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl p-5 text-center space-y-4 focus:outline-none"
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

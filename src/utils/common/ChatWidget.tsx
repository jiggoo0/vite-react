// ✅ src/utils/common/ChatWidget.tsx — Floating Chat Contact with Auto-close & Animation

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import SocialIcons from "./SocialIcons";

/**
 * 💬 ChatWidget
 *
 * - Floating contact button with social icons
 * - Auto-close after 15 seconds
 * - Responsive + dark mode + accessible
 */
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const autoCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // ⏱ Auto-close after 15 seconds
  useEffect(() => {
    if (isOpen) {
      autoCloseTimer.current = setTimeout(() => {
        setIsOpen(false);
      }, 15000); // 15 วินาที
    }

    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] sm:right-5 sm:bottom-5 max-sm:right-3 max-sm:bottom-3">
      {isOpen ? (
        <div className="w-80 max-w-[90vw] animate-fadeInUp rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl p-5 text-center space-y-4">
          {/* 🗨️ Title */}
          <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
            ติดต่อเราผ่านช่องทางโซเชียล
          </p>

          {/* 🌐 Social Icons */}
          <SocialIcons />

          {/* ❌ Close Button */}
          <button
            onClick={toggleChat}
            type="button"
            className="w-full rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ปิด
          </button>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          type="button"
          aria-label="เปิดช่องทางติดต่อ"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white dark:bg-primary-dark shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
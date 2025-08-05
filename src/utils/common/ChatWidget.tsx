// src/utils/common/ChatWidget.tsx

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import SocialIcons from "./SocialIcons";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="flex flex-col items-center w-80 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-2xl shadow-xl p-5 text-center">
          <p className="mb-4 text-base font-semibold text-gray-800 dark:text-gray-200">
            ติดต่อเราผ่านช่องทางโซเชียล
          </p>

          <SocialIcons />

          <button
            onClick={toggleChat}
            className="mt-6 px-6 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-primary"
            type="button"
          >
            ปิด
          </button>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          aria-label="Toggle Chat"
          className="bg-primary text-white dark:bg-primary-dark dark:text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          type="button"
        >
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
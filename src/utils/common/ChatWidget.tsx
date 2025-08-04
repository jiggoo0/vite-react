// ✅ src/utils/common/ChatWidget.tsx — Floating Chat Button (Production Ready)

import { FC, useState } from "react";
import { MessageCircle } from "lucide-react";

/**
 * 💬 ChatWidget
 *
 * - ปุ่มแชทลอยด้านขวาล่างของหน้าจอ
 * - Toggle เปิด/ปิดหน้าต่างแชทได้
 * - พร้อมสำหรับเชื่อมต่อระบบแชทจริงในอนาคต (เช่น chatbot, live agent)
 */
const ChatWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* 🔘 Toggle Button */}
      <button
        onClick={toggleChat}
        aria-label="Toggle Chat"
        className="rounded-full bg-primary p-4 text-white shadow-lg transition hover:bg-primary/90 focus:outline-none"
      >
        <MessageCircle size={24} />
      </button>

      {/* 🪟 Chat Panel */}
      {isOpen && (
        <div className="mt-3 w-80 max-w-[90vw] rounded-xl bg-base-100 p-4 text-base-content shadow-2xl animate-fadeInUp">
          <h2 className="mb-2 text-lg font-bold">💬 แชทกับเรา</h2>
          <p className="text-sm text-base-content/70">
            สวัสดีค่ะ 👋 หากมีคำถามหรือข้อสงสัย ทีมงานยินดีให้บริการเสมอ!
          </p>

          {/* ✅ Placeholder: สำหรับเชื่อมต่อกับระบบจริง เช่น Chatbot, Third-party Live Chat */}
          {/* <RealChatComponent /> */}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

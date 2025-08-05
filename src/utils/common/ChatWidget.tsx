import { FC, useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const ChatWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  // โฟกัส panel ตอนเปิด
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={toggleChat}
        aria-label="Toggle Chat"
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        className="rounded-full bg-primary p-4 text-white shadow-lg transition hover:bg-primary/90 focus:outline-none"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div
          id="chat-panel"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          className="mt-3 w-80 max-w-[90vw] rounded-xl bg-base-100 p-4 text-base-content shadow-2xl animate-fadeInUp"
        >
          <h2 className="mb-2 text-lg font-bold">💬 แชทกับเรา</h2>
          <p className="text-sm text-base-content/70">
            สวัสดีค่ะ 👋 หากมีคำถามหรือข้อสงสัย ทีมงานยินดีให้บริการเสมอ!
          </p>

          {/* <RealChatComponent /> */}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
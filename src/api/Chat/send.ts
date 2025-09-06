// src/api/Chat/send.ts
import { pushMessage } from "./messages.ts";
import { ChatMessage } from "./types.ts";

/**
 * ส่งข้อความจาก user และสร้าง bot reply
 */
export async function sendMessage(text: string): Promise<ChatMessage> {
  const now = Date.now();

  // user message
  const userMsg: ChatMessage = {
    id: crypto.randomUUID(),
    sender: "user",
    text,
    timestamp: now, // ใช้ timestamp ตาม type ของ ChatMessage
  };
  pushMessage(userMsg);

  // bot reply (demo)
  setTimeout(() => {
    const botMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "bot",
      text: `Bot: คุณพิมพ์ว่า "${text}"`,
      timestamp: Date.now(),
    };
    pushMessage(botMsg);
  }, 500); // delay 0.5s

  return userMsg;
}

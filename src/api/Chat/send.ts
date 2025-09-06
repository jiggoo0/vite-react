// src/api/Chat/send.ts
import { pushMessage } from "./messages.ts";
import { ChatMessage } from "./types.ts";

export function sendMessage(text: string): Promise<ChatMessage> {
  const message: ChatMessage = {
    id: Date.now().toString(),
    text,
    sender: "user",
    timestamp: Date.now(),
  };
  pushMessage(message);

  // ตัวอย่าง bot reply แบบง่าย
  const botReply: ChatMessage = {
    id: (Date.now() + 1).toString(),
    text: "Bot: " + text,
    sender: "bot",
    timestamp: Date.now() + 1,
  };
  pushMessage(botReply);

  return Promise.resolve(message);
}

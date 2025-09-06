// src/api/Chat.ts
import { v4 as uuidv4 } from "uuid";

export interface ChatMessage {
  id: string;
  text: string;
  createdAt: number;
  from: "user" | "bot";
}

class ChatAPI {
  private messages: ChatMessage[] = [];

  async getMessages(): Promise<ChatMessage[]> {
    // Return last 50 messages
    return this.messages.slice(-50);
  }

  async sendMessage(text: string, from: "user" | "bot" = "user"): Promise<ChatMessage> {
    const message: ChatMessage = {
      id: uuidv4(),
      text,
      createdAt: Date.now(),
      from,
    };
    this.messages.push(message);

    // Simulate bot response after delay
    if (from === "user") {
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: uuidv4(),
          text: `ตอบกลับ: ${text}`,
          createdAt: Date.now(),
          from: "bot",
        };
        this.messages.push(botMessage);
      }, 1000);
    }

    return message;
  }

  async clearMessages(): Promise<void> {
    this.messages = [];
  }
}

export const chatAPI = new ChatAPI();

// React hook
import { useState, useEffect, useCallback } from "react";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const refreshMessages = useCallback(async () => {
    const msgs = await chatAPI.getMessages();
    setMessages([...msgs]);
  }, []);

  const send = useCallback(
    async (text: string) => {
      await chatAPI.sendMessage(text);
      await refreshMessages();
    },
    [refreshMessages]
  );

  useEffect(() => {
    refreshMessages();
    const interval = setInterval(refreshMessages, 2000); // poll every 2s
    return () => clearInterval(interval);
  }, [refreshMessages]);

  return { messages, send, refreshMessages };
};

// src/api/Chat.ts
import { useState, useEffect } from "react";

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
}

type Callback = (msg: ChatMessage) => void;

class ChatAPI {
  private messages: ChatMessage[] = [];
  private subscribers: Callback[] = [];

  async sendMessage(message: string): Promise<ChatMessage> {
    const msg: ChatMessage = {
      id: crypto.randomUUID(),
      text: message,
      sender: "user",
      timestamp: Date.now(),
    };
    this.messages.push(msg);
    this.subscribers.forEach((cb) => cb(msg));
    return msg;
  }

  subscribe(cb: Callback): () => void {
    this.subscribers.push(cb);
    return () => {
      this.subscribers = this.subscribers.filter((c) => c !== cb);
    };
  }

  async getMessages(): Promise<ChatMessage[]> {
    return this.messages;
  }

  async clearMessages(): Promise<void> {
    this.messages = [];
  }
}

export const chatAPI = new ChatAPI();

// ===========================
// React hook
// ===========================
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const initial = await chatAPI.getMessages();
      setMessages(initial);
    };
    loadMessages();

    const unsubscribe = chatAPI.subscribe((msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return unsubscribe;
  }, []);

  const send = async (text: string) => {
    await chatAPI.sendMessage(text);
  };

  return { messages, send };
}

// src/api/Chat/index.ts
export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
}

type Listener = (messages: ChatMessage[]) => void;

// shared store + listeners
const messageStore: ChatMessage[] = [];
const listeners = new Set<Listener>();

/**
 * Broadcast snapshot ไปยังทุก subscriber
 */
function notifyAll() {
  const snapshot = structuredClone(messageStore);
  for (const cb of listeners) cb(snapshot);
}

/**
 * Chat API
 * - encapsulate store + listeners
 */
export const chatAPI = {
  /**
   * ส่งข้อความจาก user + mock bot reply
   */
  async sendMessage(text: string): Promise<ChatMessage> {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };
    messageStore.push(userMsg);
    notifyAll();

    // mock bot reply (delay 0.8s)
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        sender: "bot",
        text: `🤖 ตอบกลับ: ${text}`,
        timestamp: Date.now(),
      };
      messageStore.push(botMsg);
      notifyAll();
    }, 800);

    return userMsg;
  },

  /**
   * คืนข้อความทั้งหมด
   */
  async getMessages(): Promise<ChatMessage[]> {
    return structuredClone(messageStore);
  },

  /**
   * ล้างข้อความทั้งหมด
   */
  async clearMessages(): Promise<void> {
    messageStore.length = 0;
    notifyAll();
  },

  /**
   * subscribe realtime messages
   */
  subscribe(cb: Listener): () => void {
    listeners.add(cb);
    cb(structuredClone(messageStore));
    return () => listeners.delete(cb);
  },
};

// src/api/Chat/messages.ts
import { ChatMessage } from "./types.ts";

const messageStore: ChatMessage[] = [];
const listeners = new Set<(messages: ChatMessage[]) => void>();

export function notifyAll() {
  const snapshot = structuredClone(messageStore);
  for (const cb of listeners) cb(snapshot);
}

export function getMessages(): Promise<ChatMessage[]> {
  return Promise.resolve(structuredClone(messageStore));
}

export function clearMessages(): Promise<void> {
  messageStore.length = 0;
  notifyAll();
  return Promise.resolve();
}

export function subscribe(cb: (messages: ChatMessage[]) => void) {
  listeners.add(cb);
  cb(structuredClone(messageStore));
  return () => listeners.delete(cb);
}

export function pushMessage(msg: ChatMessage) {
  messageStore.push(msg);
  notifyAll();
}

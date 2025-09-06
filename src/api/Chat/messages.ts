// src/api/Chat/messages.ts
import fs from "fs";
import path from "path";
import { ChatMessage } from "./types.ts";

const STORE_PATH = path.resolve(process.cwd(), "chat-history.json");

const messageStore: ChatMessage[] = [];
const listeners = new Set<(messages: ChatMessage[]) => void>();

// ---- Load persisted messages ----
if (fs.existsSync(STORE_PATH)) {
  try {
    const data = JSON.parse(fs.readFileSync(STORE_PATH, "utf-8")) as ChatMessage[];
    messageStore.push(...data);
  } catch (err) {
    console.error("⚠️ Failed to load chat-history.json:", err);
  }
}

function persist() {
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(messageStore, null, 2), "utf-8");
  } catch (err) {
    console.error("⚠️ Failed to save chat-history.json:", err);
  }
}

function snapshot() {
  return structuredClone(messageStore);
}

// ---- Core store API ----
export function notifyAll() {
  const snap = snapshot();
  for (const cb of listeners) cb(snap);
}

export function getMessages(): Promise<ChatMessage[]> {
  return Promise.resolve(snapshot());
}

export function clearMessages(): Promise<void> {
  messageStore.length = 0;
  persist();
  notifyAll();
  return Promise.resolve();
}

export function subscribe(cb: (messages: ChatMessage[]) => void) {
  listeners.add(cb);
  cb(snapshot());
  return () => listeners.delete(cb);
}

export function pushMessage(msg: ChatMessage) {
  messageStore.push(msg);
  persist();
  notifyAll();
}

// src/utils/auth.ts
export type User = { username: string; role: "admin" | "user" | "manager" };

/** Type guard สำหรับตรวจสอบ User object */
export const isValidUser = (data: unknown): data is User => {
  if (typeof data !== "object" || data === null) return false;
  const candidate = data as Record<string, unknown>;
  return (
    typeof candidate.username === "string" &&
    ["admin", "user", "manager"].includes(candidate.role as string)
  );
};

/** ดึง user จาก localStorage */
export const parseUserFromStorage = (): User | null => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return isValidUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

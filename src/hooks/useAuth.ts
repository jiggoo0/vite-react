import { useState, useEffect, useCallback } from "react";

/** User type */
export type User = {
  username: string;
  role: "admin" | "user";
};

/**
 * parseUserFromStorage
 * -------------------------
 * อ่านข้อมูลผู้ใช้จาก localStorage และตรวจสอบความถูกต้อง
 */
export const parseUserFromStorage = (): User | null => {
  const raw = localStorage.getItem("user");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);

    if (
      parsed &&
      typeof parsed === "object" &&
      "username" in parsed &&
      typeof (parsed as { username?: unknown }).username === "string" &&
      "role" in parsed &&
      (["admin", "user"] as const).includes(
        (parsed as { role?: unknown }).role as User["role"]
      )
    ) {
      return parsed as User;
    }
  } catch (error) {
    console.error("Failed to parse user from storage:", error);
  }

  return null;
};

/**
 * useAuth
 * -------------------------
 * Hook สำหรับจัดการ authentication ของผู้ใช้
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // โหลด user จาก storage ตอน mount
  useEffect(() => {
    const storedUser = parseUserFromStorage();
    setUser(storedUser);
  }, []);

  const isAuthenticated = Boolean(user);

  /**
   * logout
   * -------------------------
   * ล้างข้อมูลผู้ใช้จาก storage และ state
   */
  const logout = useCallback(() => {
    try {
      localStorage.removeItem("user");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }, []);

  return { user, isAuthenticated, logout };
};

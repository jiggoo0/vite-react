import { useState, useEffect } from "react";

export type User = {
  username: string;
  role: "admin" | "user";
};

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

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = parseUserFromStorage();
    setUser(storedUser);
  }, []);

  const isAuthenticated = Boolean(user);

  // ✅ เพิ่ม logout function
  const logout = async () => {
    try {
      localStorage.removeItem("user"); // ล้าง user จาก storage
      setUser(null); // อัพเดต state
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return { user, isAuthenticated, logout };
};
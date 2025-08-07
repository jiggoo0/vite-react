// src/hooks/useAuth.ts
import { useState, useEffect } from "react";

export type User = {
  username: string;
  role: "admin" | "user" | "temp";
};

/**
 * 🔑 useAuth
 *
 * - Hook สำหรับจัดการสถานะ Authentication แบบ client-side
 * - อ่าน/เขียนข้อมูล user จาก localStorage
 * - มีสถานะ loading สำหรับตรวจสอบข้อมูลตอน mount
 * - มีฟังก์ชัน login/logout เพื่อแก้ไขสถานะ user และ localStorage
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (
          typeof parsed === "object" &&
          parsed !== null &&
          typeof parsed.username === "string" &&
          (parsed.role === "admin" ||
            parsed.role === "user" ||
            parsed.role === "temp")
        ) {
          setUser(parsed);
        } else {
          localStorage.removeItem("user");
        }
      } catch {
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };
};
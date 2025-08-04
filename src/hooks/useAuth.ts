// ✅ src/hooks/useAuth.ts — จัดการสถานะผู้ใช้ + Logout

import { useEffect, useState } from "react";

/**
 * 🌐 ประเภทของผู้ใช้ในระบบ
 */
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
};

/**
 * 🔐 useAuth — Hook สำหรับจัดการสถานะผู้ใช้
 *
 * - ใช้ใน Route Guards, Navbar, หรือ Component ที่ต้องรู้สถานะผู้ใช้
 * - จำลองระบบ Auth โดยใช้ localStorage เก็บข้อมูล
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * ✅ โหลดสถานะผู้ใช้จาก localStorage เมื่อ component mount
   */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;

        // ตรวจสอบข้อมูลพื้นฐานเบื้องต้นก่อนใช้งานจริง
        if (
          typeof parsedUser.id === "number" &&
          typeof parsedUser.name === "string" &&
          typeof parsedUser.email === "string" &&
          ["admin", "user", "guest"].includes(parsedUser.role)
        ) {
          setUser(parsedUser);
        } else {
          console.warn("⚠️ ข้อมูลผู้ใช้ไม่ถูกต้อง:", parsedUser);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("⚠️ ไม่สามารถอ่านข้อมูลผู้ใช้จาก localStorage:", error);
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  /**
   * 🔓 Logout — เคลียร์ข้อมูลผู้ใช้ออกจากระบบ
   */
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    role: user?.role ?? "guest",
    loading,
    logout
  };
}

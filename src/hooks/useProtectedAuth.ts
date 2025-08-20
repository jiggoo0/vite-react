import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

/** User type */
export type User = {
  username: string;
  role: "admin" | "user" | "temp" | "manager";
};

/**
 * Type guard ตรวจสอบ object เป็น User
 */
const isUser = (obj: unknown): obj is User => {
  if (typeof obj !== "object" || obj === null) return false;

  const u = obj as Record<string, unknown>;
  return (
    typeof u.username === "string" &&
    typeof u.role === "string" &&
    ["admin", "user", "temp", "manager"].includes(u.role)
  );
};

/**
 * useProtectedAuth
 * -------------------------
 * Hook สำหรับจัดการ authentication ของผู้ใช้ที่ protected route
 */
export const useProtectedAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // โหลด user จาก localStorage และตรวจสอบความถูกต้อง
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setLoading(false);
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsedUser: unknown = JSON.parse(storedUser);

      if (isUser(parsedUser)) {
        setUser(parsedUser);
      } else {
        throw new Error("Invalid user data");
      }
    } catch (err) {
      console.error("Failed to parse user data:", err);
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  /**
   * logout
   * -------------------------
   * ล้างข้อมูลผู้ใช้และพาไปหน้า login
   */
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate]);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    logout,
  };
};
import { useState, useCallback } from "react";
import { tryUserTempLogin } from "@/data/UserTempCodes";

interface TempCodeAuthResult {
  isLoggedIn: boolean;
  error: string | null;
  login: (userId: string, code: string) => Promise<boolean>;
}

/**
 * useTempCodeAuth
 * -------------------------
 * Custom hook สำหรับตรวจสอบการล็อกอินด้วยรหัสชั่วคราว
 */
export function useTempCodeAuth(): TempCodeAuthResult {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * login
   * -------------------------
   * ตรวจสอบรหัสชั่วคราวและอัปเดตสถานะ isLoggedIn และ error
   */
  const login = useCallback(
    async (userId: string, code: string): Promise<boolean> => {
      const trimmedUserId = userId.trim();

      if (!trimmedUserId || !code) {
        setError("กรุณากรอกชื่อผู้ใช้และรหัสชั่วคราว");
        setIsLoggedIn(false);
        return false;
      }

      try {
        const success = await tryUserTempLogin(trimmedUserId, code);

        if (success) {
          setIsLoggedIn(true);
          setError(null);
          return true;
        } else {
          setIsLoggedIn(false);
          setError("รหัสชั่วคราวไม่ถูกต้อง หรือหมดอายุแล้ว หรือใช้ไปแล้ว");
          return false;
        }
      } catch (err) {
        console.error("Temp code login error:", err);
        setIsLoggedIn(false);
        setError("เกิดข้อผิดพลาดในการตรวจสอบรหัส");
        return false;
      }
    },
    []
  );

  return { isLoggedIn, error, login };
}

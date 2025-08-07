// src/hooks/useTempCodeAuth.ts

import { useState } from "react";
import { tryUserTempLogin } from "@/data/UserTempCodes";

interface TempCodeAuthResult {
  isLoggedIn: boolean;
  error: string | null;
  login: () => Promise<void>;
}

export function useTempCodeAuth(userId: string, code: string): TempCodeAuthResult {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    if (!userId.trim() || !code) {
      setError("กรุณากรอกชื่อผู้ใช้และรหัสชั่วคราว");
      setIsLoggedIn(false);
      return;
    }

    const success = tryUserTempLogin(userId.trim(), code);
    if (success) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setIsLoggedIn(false);
      setError("รหัสชั่วคราวไม่ถูกต้อง หรือ หมดอายุแล้ว หรือใช้ไปแล้ว");
    }
  };

  return {
    isLoggedIn,
    error,
    login,
  };
}
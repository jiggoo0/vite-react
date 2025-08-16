import { useState } from 'react';
import { tryUserTempLogin } from '@/data/UserTempCodes';

interface TempCodeAuthResult {
  isLoggedIn: boolean;
  error: string | null;
  login: (userId: string, code: string) => Promise<boolean>;
}

export function useTempCodeAuth(): TempCodeAuthResult {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (userId: string, code: string): Promise<boolean> => {
    if (!userId.trim() || !code) {
      setError('กรุณากรอกชื่อผู้ใช้และรหัสชั่วคราว');
      setIsLoggedIn(false);
      return false;
    }

    try {
      const success = await tryUserTempLogin(userId.trim(), code);
      if (success) {
        setIsLoggedIn(true);
        setError(null);
        return true;
      } else {
        setIsLoggedIn(false);
        setError('รหัสชั่วคราวไม่ถูกต้อง หรือ หมดอายุแล้ว หรือใช้ไปแล้ว');
        return false;
      }
    } catch (err) {
      console.error('Temp code login error:', err);
      setIsLoggedIn(false);
      setError('เกิดข้อผิดพลาดในการตรวจสอบรหัส');
      return false;
    }
  };

  return {
    isLoggedIn,
    error,
    login,
  };
}

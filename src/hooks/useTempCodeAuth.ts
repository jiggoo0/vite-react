// src/hooks/useTempCodeAuth.ts
"use client";

import { useState, useCallback } from "react";

/** Hook สำหรับจัดการ Temporary Code Authentication */
export const useTempCodeAuth = (initialCode: string | null = null) => {
  const [tempCode, setTempCode] = useState<string | null>(initialCode);

  /** ตั้งค่า temporary code ใหม่ */
  const saveTempCode = useCallback((code: string) => {
    try {
      localStorage.setItem("temp-code", code);
      setTempCode(code);
    } catch (err) {
      console.error("Failed to save temp code:", err);
    }
  }, []);

  /** ลบ temporary code */
  const clearTempCode = useCallback(() => {
    try {
      localStorage.removeItem("temp-code");
      setTempCode(null);
    } catch (err) {
      console.error("Failed to clear temp code:", err);
    }
  }, []);

  /** โหลด code จาก localStorage */
  const loadTempCode = useCallback(() => {
    try {
      const code = localStorage.getItem("temp-code");
      setTempCode(code);
      return code;
    } catch (err) {
      console.error("Failed to load temp code:", err);
      return null;
    }
  }, []);

  return {
    tempCode,
    saveTempCode,
    clearTempCode,
    loadTempCode,
  };
};

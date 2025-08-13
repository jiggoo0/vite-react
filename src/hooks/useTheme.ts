import { useState, useEffect, useCallback } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

/**
 * useTheme Hook
 *
 * - จัดการสถานะธีมของแอป (light / dark)
 * - เก็บธีมใน localStorage และตั้งค่า class/attribute ให้ document
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // ฟังก์ชันตั้งธีมจริงที่ DOM และ localStorage
  const applyTheme = useCallback((nextTheme: Theme) => {
    setTheme(nextTheme);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      document.documentElement.setAttribute("data-theme", nextTheme);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, nextTheme);
    }
  }, []);

  // โหลดธีมจาก localStorage หรือ prefers-color-scheme ตอน mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersDark
          ? "dark"
          : "light";

    applyTheme(defaultTheme);
  }, [applyTheme]);

  // ฟัง event storage เพื่อซิงค์ธีมระหว่าง tab ต่าง ๆ
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === THEME_KEY &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        applyTheme(e.newValue);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyTheme]);

  // สลับธีม
  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

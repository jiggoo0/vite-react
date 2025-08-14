import { useState, useEffect, useCallback } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

/**
 * 🔄 useTheme
 *
 * - Hook สำหรับจัดการ Theme ของเว็บไซต์ (Light / Dark)
 * - รองรับ localStorage, prefers-color-scheme, และการ sync ข้าม tab
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // ฟังก์ชันปรับ theme ทั้ง DOM และ localStorage
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

  // โหลด theme เริ่มต้นจาก localStorage หรือ prefers-color-scheme
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

  // Sync theme ข้าม tab/window
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

  // Toggle theme
  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

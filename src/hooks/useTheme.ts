import { useState, useEffect, useCallback, useRef } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";
const DEFAULT_THEME: Theme = "light";

/** Type guard ตรวจสอบ theme */
const isValidTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark";

/**
 * 🔄 useTheme — จัดการ Theme (Light/Dark) แบบครบวงจร
 * - โหลดค่าเริ่มต้นจาก localStorage หรือ prefers-color-scheme
 * - Sync theme ข้าม Tab
 * - ป้องกัน FOUC (Flash of Unstyled Content)
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const isInitialMount = useRef(true);

  /** ✅ Apply theme to DOM & localStorage */
  const applyTheme = useCallback((nextTheme: Theme) => {
    setTheme(nextTheme);

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // ignore if localStorage is unavailable
    }
  }, []);

  /** 🔹 Detect initial theme on mount */
  useEffect(() => {
    if (typeof window === "undefined") return;

    let initialTheme: Theme = DEFAULT_THEME;

    try {
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

      initialTheme = isValidTheme(saved)
        ? saved
        : prefersDark
          ? "dark"
          : "light";
    } catch {
      // fallback to default theme
    }

    applyTheme(initialTheme);
    isInitialMount.current = false;
  }, [applyTheme]);

  /** 🔹 Sync theme across browser tabs */
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && isValidTheme(e.newValue)) {
        applyTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyTheme]);

  /** 🔹 Toggle theme manually */
  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme, applyTheme]);

  return { theme, toggleTheme, isInitialMount: isInitialMount.current };
}

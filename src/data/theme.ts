// src/data/theme.ts — Theme Config & Utilities (Client-only Safe)

export type ThemeName = "light" | "dark" | "business";

export const THEMES = ["light", "dark", "business"] as const;
export const DEFAULT_THEME: ThemeName = "light";

/**
 * ตรวจสอบว่าค่าที่รับมาเป็น ThemeName ที่รองรับหรือไม่
 * @param theme ค่า string ที่ต้องการตรวจสอบ
 * @returns true หาก theme อยู่ใน THEMES
 */
const isValidTheme = (theme: unknown): theme is ThemeName =>
  typeof theme === "string" && THEMES.includes(theme as ThemeName);

/**
 * 🧠 ดึงค่าธีมจาก localStorage (Client-side เท่านั้น)
 * คืนค่าเป็น ThemeName หรือ DEFAULT_THEME หากไม่มีค่าใน localStorage หรือค่าไม่ถูกต้อง
 * @returns ThemeName
 */
export const getSavedTheme = (): ThemeName => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  try {
    const stored = localStorage.getItem("theme");
    if (isValidTheme(stored)) return stored;
  } catch {
    // localStorage อาจไม่สามารถเข้าถึงได้ในบาง environment
  }

  return DEFAULT_THEME;
};

/**
 * 💾 บันทึกธีมลงใน localStorage (Client-side เท่านั้น)
 * @param theme ชื่อธีมที่ต้องการบันทึก
 */
export const saveTheme = (theme: ThemeName): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // fail silently หากไม่สามารถเขียนได้
  }
};

/**
 * 🎨 นำธีมไปใช้กับ attribute data-theme ของ <html> (Client-side เท่านั้น)
 * @param theme ชื่อธีมที่ต้องการใช้
 */
export const applyTheme = (theme: ThemeName): void => {
  if (typeof document === "undefined") return;

  try {
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    // fail silently หาก DOM ไม่พร้อม
  }
};

/**
 * 🔄 สลับธีมไปยังธีมถัดไปใน THEMES แบบวนลูป (Client-side เท่านั้น)
 * บันทึกและ apply ธีมใหม่ทันที
 * @returns ธีมใหม่หลังจากสลับ
 */
export const toggleTheme = (): ThemeName => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const current = getSavedTheme();
  const nextIndex = (THEMES.indexOf(current) + 1) % THEMES.length;
  const nextTheme = THEMES[nextIndex];

  saveTheme(nextTheme);
  applyTheme(nextTheme);

  return nextTheme;
};

/**
 * 🚀 เรียกใช้ตอนเริ่มแอป เพื่ออ่านธีมจาก localStorage แล้ว apply ทันที
 * กรณีไม่พบธีมใน localStorage ให้ใช้ DEFAULT_THEME
 */
export const initTheme = (): void => {
  applyTheme(getSavedTheme());
};

// ───────────
// ฟังก์ชัน subscribe สำหรับ sync ธีมข้ามแท็บผ่าน event 'storage'

type ThemeChangeCallback = (newTheme: ThemeName) => void;

/**
 * subscribe การเปลี่ยนแปลงธีมผ่าน event 'storage' (ข้ามแท็บ)
 * คืนฟังก์ชัน unsubscribe เพื่อเลิกฟัง event
 *
 * @param callback ฟังก์ชัน callback เมื่อธีมเปลี่ยนแปลง
 * @returns ฟังก์ชัน unsubscribe
 */
export const subscribeThemeChange = (
  callback: ThemeChangeCallback
): (() => void) => {
  if (typeof window === "undefined") return () => {};

  const handler = (event: StorageEvent) => {
    if (
      event.key === "theme" &&
      event.newValue &&
      isValidTheme(event.newValue)
    ) {
      callback(event.newValue);
    }
  };

  window.addEventListener("storage", handler);

  return () => window.removeEventListener("storage", handler);
};
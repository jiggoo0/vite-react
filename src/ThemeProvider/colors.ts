/**
 * colors.ts
 * -------------------------
 * 🎨 กำหนด palette สีมาตรฐาน + theme ของแอป
 * ใช้ได้กับ Tailwind, DaisyUI หรือ CSS-in-JS
 */

/** ✅ Base Palette */
export const COLORS = {
  primary: "#1E3A8A",
  primaryHover: "#2563EB",
  primaryDisabled: "#9CA3AF",
  secondary: "#374151",
  accent: "#FBBF24",
  neutral: "#6B7280",

  success: "#10B981",
  warning: "#FACC15",
  error: "#EF4444",
  info: "#3B82F6",

  bgLight: "#F9FAFB",
  bgDark: "#1F2937",

  primaryDark: "#1E3A8A",
  greenLight: "#6EE7B7",
  goldLight: "#FCD34D",
} as const;

/** ✅ Business / Enterprise Theme */
export const BUSINESS_THEME = {
  primary: "#1E3A8A",
  primaryHover: "#2563EB",
  primaryDisabled: "#9CA3AF",
  primaryContent: "#FFFFFF",

  secondary: "#374151",
  accent: "#FBBF24",
  neutral: "#6B7280",

  base100: "#F3F4F6",
  base200: "#E5E7EB",
  base300: "#D1D5DB",

  info: "#3B82F6",
  success: "#10B981",
  warning: "#FACC15",
  error: "#EF4444",
} as const;

/** ✅ Supported Theme Types */
export type ThemeType = "light" | "dark" | "business";

/** 📌 Utility Types */
export type ColorKey = keyof typeof COLORS;
export type BusinessThemeKey = keyof typeof BUSINESS_THEME;
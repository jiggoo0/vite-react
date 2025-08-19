/**
 * colors.ts
 * -------------------------
 * รายการสีมาตรฐานและธีมที่ใช้ในแอป
 * สามารถใช้ร่วมกับ Tailwind, DaisyUI หรือ CSS-in-JS
 */

/** โทนสีหลักของแอป */
export const COLORS = {
  primary: "#2563EB",
  "primary-hover": "#1E40AF",
  "primary-disabled": "#9CA3AF",
  secondary: "#9333EA",
  accent: "#F59E0B",
  neutral: "#374151",
  success: "#10B981",
  warning: "#FACC15",
  error: "#EF4444",
  info: "#3B82F6",
  "bg-light": "#F9FAFB",
  "bg-dark": "#1F2937",
  "primary-dark": "#1E3A8A",
  "green-light": "#6EE7B7",
  "gold-light": "#FCD34D",
};

/** ธีม Business สำหรับองค์กร */
export const BUSINESS_THEME = {
  primary: "#1E3A8A",
  "primary-hover": "#2563EB",
  "primary-disabled": "#9CA3AF",
  "primary-content": "#ffffff",
  secondary: "#2563EB",
  accent: "#FBBF24",
  neutral: "#374151",
  "base-100": "#F3F4F6",
  "base-200": "#E5E7EB",
  "base-300": "#D1D5DB",
  info: "#3B82F6",
  success: "#10B981",
  warning: "#FACC15",
  error: "#EF4444",
};

/** ประเภทของธีมที่รองรับ */
export type ThemeType = "light" | "dark" | "business";

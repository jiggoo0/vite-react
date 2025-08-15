/**
 * 💡 Theme Name Types
 * -------------------
 * กำหนดชื่อธีมที่รองรับในระบบ
 */
export type ThemeName = "light" | "dark" | "business" | "team";

/**
 * 🎨 Theme Color Type
 * -------------------
 * กำหนดโครงสร้างของค่าสีในแต่ละธีม
 */
export type ThemeColors = Readonly<{
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  "base-100": string;
  "base-200": string;
  "base-300": string;
  info: string;
  success: string;
  warning: string;
  error: string;
}>;

/** =======================
 * 🌞 Light Theme
 * ===================== */
export const lightThemeColors: ThemeColors = {
  primary: "#2563EB",
  secondary: "#9333EA",
  accent: "#F59E0B",
  neutral: "#374151",
  "base-100": "#FFFFFF",
  "base-200": "#F3F4F6",
  "base-300": "#E5E7EB",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

/** =======================
 * 🌙 Dark Theme
 * ===================== */
export const darkThemeColors: ThemeColors = {
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  accent: "#FBBF24",
  neutral: "#1F2937",
  "base-100": "#111827",
  "base-200": "#1F2937",
  "base-300": "#374151",
  info: "#60A5FA",
  success: "#4ADE80",
  warning: "#FACC15",
  error: "#F87171",
};

/** =======================
 * 💼 Business Theme
 * ===================== */
export const businessThemeColors: ThemeColors = {
  primary: "#0C4A6E",
  secondary: "#0284C7",
  accent: "#22D3EE",
  neutral: "#334155",
  "base-100": "#F1F5F9",
  "base-200": "#E2E8F0",
  "base-300": "#CBD5E1",
  info: "#38BDF8",
  success: "#22C55E",
  warning: "#EAB308",
  error: "#DC2626",
};

/** =======================
 * 👥 Team Theme
 * ===================== */
export const teamThemeColors: ThemeColors = {
  primary: "#1D4ED8",
  secondary: "#9333EA",
  accent: "#F59E0B",
  neutral: "#374151",
  "base-100": "#FFFFFF",
  "base-200": "#F3F4F6",
  "base-300": "#E5E7EB",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

/** =======================
 * 🔹 Theme Collection
 * ===================== */
export const themes: Record<ThemeName, ThemeColors> = {
  light: lightThemeColors,
  dark: darkThemeColors,
  business: businessThemeColors,
  team: teamThemeColors,
};

/** =======================
 * 🏷 Default Theme
 * ===================== */
export const defaultThemeName: ThemeName = "team";

/** 💡 ประเภทของชื่อธีม */
export type ThemeName = "light" | "dark" | "business" | "team";

/** =======================
 * 🌞 Light Theme Colors
 * ===================== */
export const lightThemeColors = {
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
} as const;

/** =======================
 * 🌙 Dark Theme Colors
 * ===================== */
export const darkThemeColors = {
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
} as const;

/** =======================
 * 💼 Business Theme Colors
 * ===================== */
export const businessThemeColors = {
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
} as const;

/** =======================
 * 👥 Team Theme Colors
 * ===================== */
export const teamThemeColors = {
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
} as const;

/** =======================
 * 🔹 รวมทุกธีม
 * ===================== */
export const themes: Record<ThemeName, Record<string, string>> = {
  light: lightThemeColors,
  dark: darkThemeColors,
  business: businessThemeColors,
  team: teamThemeColors,
};

/** =======================
 * 🏷 Default Theme
 * ===================== */
export const defaultThemeName: ThemeName = "team";

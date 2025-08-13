export type ThemeName = "light" | "dark" | "business" | "team";

export const lightThemeColors = {
  primary: "#2563eb",
  secondary: "#9333ea",
  accent: "#f59e0b",
  neutral: "#374151",
  "base-100": "#ffffff",
  "base-200": "#f3f4f6",
  "base-300": "#e5e7eb",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

export const darkThemeColors = {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  accent: "#fbbf24",
  neutral: "#1f2937",
  "base-100": "#111827",
  "base-200": "#1f2937",
  "base-300": "#374151",
  info: "#60a5fa",
  success: "#4ade80",
  warning: "#facc15",
  error: "#f87171",
};

export const businessThemeColors = {
  primary: "#0c4a6e",
  secondary: "#0284c7",
  accent: "#22d3ee",
  neutral: "#334155",
  "base-100": "#f1f5f9",
  "base-200": "#e2e8f0",
  "base-300": "#cbd5e1",
  info: "#38bdf8",
  success: "#22c55e",
  warning: "#eab308",
  error: "#dc2626",
};

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
};

export const themes = {
  light: lightThemeColors,
  dark: darkThemeColors,
  business: businessThemeColors,
  team: teamThemeColors,
};

export const defaultThemeName: ThemeName = "team";

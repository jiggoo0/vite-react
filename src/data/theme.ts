// src/data/theme.ts
/**
 * Theme Configuration
 * -------------------
 * Define colors, fonts, and other design tokens
 * for Light, Dark, and Business themes.
 */

export type ThemeColors = {
  primary: string;
  "primary-hover": string;
  "primary-disabled": string;
  secondary: string;
  accent: string;
  neutral: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  "bg-light": string;
  "bg-dark": string;
  "primary-dark"?: string;
  "green-light"?: string;
  "gold-light"?: string;
  [key: string]: string | undefined;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
  fontFamily?: string[];
  borderRadius?: { sm: string; md: string; lg: string };
  boxShadow?: { sm: string; md: string };
  transitionDuration?: { fast: string; base: string; slow: string };
};

// ---------- Light Theme ----------
export const lightTheme: Theme = {
  name: "light",
  colors: {
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
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: {
    sm: "0 2px 4px rgba(0,0,0,0.05)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
  },
  transitionDuration: { fast: "150ms", base: "250ms", slow: "300ms" },
};

// ---------- Dark Theme ----------
export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#3B82F6",
    "primary-hover": "#2563EB",
    "primary-disabled": "#6B7280",
    secondary: "#A855F7",
    accent: "#FBBF24",
    neutral: "#1F2937",
    success: "#34D399",
    warning: "#FDE047",
    error: "#F87171",
    info: "#60A5FA",
    "bg-light": "#111827",
    "bg-dark": "#1F2937",
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: {
    sm: "0 2px 4px rgba(255,255,255,0.05)",
    md: "0 4px 12px rgba(255,255,255,0.06)",
  },
  transitionDuration: { fast: "150ms", base: "250ms", slow: "300ms" },
};

// ---------- Business Theme ----------
export const businessTheme: Theme = {
  name: "business",
  colors: {
    primary: "#1E3A8A",
    "primary-hover": "#2563EB",
    "primary-disabled": "#9CA3AF",
    "primary-content": "#FFFFFF",
    secondary: "#2563EB",
    accent: "#FBBF24",
    neutral: "#374151",
    success: "#10B981",
    warning: "#FACC15",
    error: "#EF4444",
    info: "#3B82F6",
    "bg-light": "#F3F4F6",
    "bg-dark": "#D1D5DB",
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: {
    sm: "0 2px 4px rgba(0,0,0,0.05)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
  },
  transitionDuration: { fast: "150ms", base: "250ms", slow: "300ms" },
};

// ---------- Export All Themes ----------
export const themes: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  business: businessTheme,
};

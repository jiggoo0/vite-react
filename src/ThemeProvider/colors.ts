// src/ThemeProvider/colors.ts

export interface ThemeColors {
  primary: string;
  "primary-hover": string;
  "primary-disabled": string;
  "primary-content": string;
  secondary: string;
  accent: string;
  neutral: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  bg: string;
  "bg-light": string;
  text: string;
  "text-muted": string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  radius: { md: string };
  fontFamily: { base: string };
  transition: { base: string; fast: string };
}

// -----------------------------
// Light Theme
// -----------------------------
export const lightTheme: ThemeConfig = {
  colors: {
    primary: "#3b82f6",
    "primary-hover": "#2563eb",
    "primary-disabled": "#d1d5db",
    "primary-content": "#ffffff",
    secondary: "#4b5563",
    accent: "#6b7280",
    neutral: "#f3f4f6",
    info: "#0ea5e9",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    bg: "#ffffff",
    "bg-light": "#f3f4f6",
    text: "#111827",
    "text-muted": "#6b7280",
  },
  radius: { md: "0.5rem" },
  fontFamily: { base: "'Kanit', system-ui, sans-serif" },
  transition: { base: "0.25s", fast: "0.2s" },
};

// -----------------------------
// Dark Theme
// -----------------------------
export const darkTheme: ThemeConfig = {
  colors: {
    primary: "#3b82f6",
    "primary-hover": "#2563eb",
    "primary-disabled": "#6b7280",
    "primary-content": "#ffffff",
    secondary: "#4b5563",
    accent: "#6b7280",
    neutral: "#111827",
    info: "#0ea5e9",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    bg: "#1f2937",
    "bg-light": "#111827",
    text: "#f3f4f6",
    "text-muted": "#9ca3af",
  },
  radius: { md: "0.5rem" },
  fontFamily: { base: "'Kanit', system-ui, sans-serif" },
  transition: { base: "0.25s", fast: "0.2s" },
};

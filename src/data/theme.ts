// src/data/theme.ts

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

export const lightTheme: ThemeConfig = {
  colors: {
    primary: "#1f2937",
    "primary-hover": "#111827",
    "primary-disabled": "#6b7280",
    "primary-content": "#ffffff",
    secondary: "#4b5563",
    accent: "#6b7280",
    neutral: "#f3f4f6",
    info: "#0ea5e9",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    bg: "#ffffff",
    "bg-light": "#f9fafb",
    text: "#111827",
    "text-muted": "#6b7280",
  },
  radius: { md: "0.5rem" },
  fontFamily: { base: "'Kanit', 'Noto Sans Thai', system-ui, sans-serif" },
  transition: { base: "250ms", fast: "200ms" },
};

export const darkTheme: ThemeConfig = {
  colors: {
    primary: "#1f2937",
    "primary-hover": "#111827",
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
  fontFamily: { base: "'Kanit', 'Noto Sans Thai', system-ui, sans-serif" },
  transition: { base: "250ms", fast: "200ms" },
};

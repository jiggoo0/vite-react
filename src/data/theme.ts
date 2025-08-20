// src/data/theme.ts
export type ThemeColors = {
  primary: string;
  "primary-hover": string;
  "primary-disabled": string;
  "primary-content"?: string;
  secondary: string;
  accent: string;
  neutral: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  "bg-light": string;
  "bg-dark": string;
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
    primary: "#1E3A8A",
    "primary-hover": "#2563EB",
    "primary-disabled": "#9CA3AF",
    secondary: "#374151",
    accent: "#FBBF24",
    neutral: "#6B7280",
    success: "#10B981",
    warning: "#FACC15",
    error: "#EF4444",
    info: "#3B82F6",
    "bg-light": "#F9FAFB",
    "bg-dark": "#1F2937",
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: { sm: "0 2px 4px rgba(0,0,0,0.05)", md: "0 4px 12px rgba(0,0,0,0.08)" },
  transitionDuration: { fast: "150ms", base: "250ms", slow: "300ms" },
};

// ---------- Dark Theme ----------
export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#2563EB",
    "primary-hover": "#1E40AF",
    "primary-disabled": "#9CA3AF",
    secondary: "#A1A1AA",
    accent: "#FBBF24",
    neutral: "#1F2937",
    success: "#10B981",
    warning: "#FACC15",
    error: "#EF4444",
    info: "#3B82F6",
    "bg-light": "#111827",
    "bg-dark": "#1F2937",
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: { sm: "0 2px 4px rgba(255,255,255,0.05)", md: "0 4px 12px rgba(255,255,255,0.06)" },
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
    secondary: "#374151",
    accent: "#FBBF24",
    neutral: "#6B7280",
    success: "#10B981",
    warning: "#FACC15",
    error: "#EF4444",
    info: "#3B82F6",
    "bg-light": "#F3F4F6",
    "bg-dark": "#D1D5DB",
  },
  fontFamily: ["Kanit", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  borderRadius: { sm: "4px", md: "8px", lg: "12px" },
  boxShadow: { sm: "0 2px 4px rgba(0,0,0,0.05)", md: "0 4px 12px rgba(0,0,0,0.08)" },
  transitionDuration: { fast: "150ms", base: "250ms", slow: "300ms" },
};

// ---------- Export All Themes ----------
export const themes: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  business: businessTheme,
};
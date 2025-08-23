export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryDisabled: string;
  primaryContent: string;
  secondary: string;
  secondaryHover: string;
  secondaryContent: string;
  accent: string;
  accentHover: string;
  accentContent: string;
  neutral: string;
  neutralHover: string;
  neutralContent: string;
  base100: string;
  base200: string;
  base300: string;
  text: string;
  textMuted: string;
  bg: string;
  bgLight: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

/**
 * Business Theme
 * -------------------------
 * ใช้ร่วมกับ Tailwind + DaisyUI
 */
export const businessTheme: Record<ThemeMode, ThemeColors> = {
  light: {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryDisabled: "#6b7280",
    primaryContent: "#ffffff",
    secondary: "#facc15",
    secondaryHover: "#eab308",
    secondaryContent: "#1f2937",
    accent: "#22c55e",
    accentHover: "#16a34a",
    accentContent: "#ffffff",
    neutral: "#f3f4f6",
    neutralHover: "#d1d5db",
    neutralContent: "#111827",
    base100: "#ffffff",
    base200: "#f9fafb",
    base300: "#e5e7eb",
    text: "#111827",
    textMuted: "#6b7280",
    bg: "#ffffff",
    bgLight: "#f3f4f6",
  },
  dark: {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryDisabled: "#6b7280",
    primaryContent: "#ffffff",
    secondary: "#facc15",
    secondaryHover: "#eab308",
    secondaryContent: "#1f2937",
    accent: "#22c55e",
    accentHover: "#16a34a",
    accentContent: "#ffffff",
    neutral: "#1f2937",
    neutralHover: "#111827",
    neutralContent: "#f3f4f6",
    base100: "#1f2937",
    base200: "#111827",
    base300: "#1e293b",
    text: "#f3f4f6",
    textMuted: "#9ca3af",
    bg: "#1f2937",
    bgLight: "#111827",
  },
};

/**
 * Toggle Dark / Light Theme
 */
export const setThemeMode = (mode: ThemeMode) => {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }

  const colors = businessTheme[mode];
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
};
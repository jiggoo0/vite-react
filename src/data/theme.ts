export type ThemeKey =
  | "primary"
  | "primary-focus"
  | "primary-content"
  | "secondary"
  | "secondary-focus"
  | "secondary-content"
  | "accent"
  | "accent-focus"
  | "accent-content"
  | "neutral"
  | "neutral-focus"
  | "neutral-content"
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-content"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ThemeColors = Record<ThemeKey, string>;

const sharedPalette: Omit<
  ThemeColors,
  | "primary"
  | "primary-focus"
  | "primary-content"
  | "secondary"
  | "secondary-focus"
  | "secondary-content"
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-content"
> = {
  accent: "#F59E0B",
  "accent-focus": "#D97706",
  "accent-content": "#000000",
  neutral: "#374151",
  "neutral-focus": "#1F2937",
  "neutral-content": "#FFFFFF",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

export const lightTheme: ThemeColors = {
  primary: "#2563EB",
  "primary-focus": "#1D4ED8",
  "primary-content": "#FFFFFF",
  secondary: "#9333EA",
  "secondary-focus": "#7E22CE",
  "secondary-content": "#FFFFFF",
  "base-100": "#FFFFFF",
  "base-200": "#F3F4F6",
  "base-300": "#E5E7EB",
  "base-content": "#1F2937",
  ...sharedPalette,
};

export const darkTheme: ThemeColors = {
  primary: "#3B82F6",
  "primary-focus": "#2563EB",
  "primary-content": "#FFFFFF",
  secondary: "#A78BFA",
  "secondary-focus": "#9333EA",
  "secondary-content": "#FFFFFF",
  "base-100": "#1F2937",
  "base-200": "#111827",
  "base-300": "#374151",
  "base-content": "#F3F4F6",
  ...sharedPalette,
};

export const teamThemeColors: ThemeColors = {
  primary: "#1D4ED8",
  "primary-focus": "#1E40AF",
  "primary-content": "#FFFFFF",
  secondary: "#9333EA",
  "secondary-focus": "#7E22CE",
  "secondary-content": "#FFFFFF",
  "base-100": "#FFFFFF",
  "base-200": "#F3F4F6",
  "base-300": "#E5E7EB",
  "base-content": "#1F2937",
  ...sharedPalette,
};

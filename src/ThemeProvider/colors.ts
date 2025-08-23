export const colors = {
  primary: "#1e3a8a",
  "primary-hover": "#2563eb",
  "primary-disabled": "#9ca3af",
  "primary-content": "#ffffff",
  secondary: "#2563eb",
  "secondary-hover": "#1e40af",
  accent: "#fbbf24",
  neutral: "#374151",
  success: "#10b981",
  warning: "#facc15",
  error: "#ef4444",
  info: "#3b82f6",
  "bg-light": "#e5e7eb",
  "bg-dark": "#f3f4f6",
  text: "#111827",
  "text-muted": "#374151",
} as const;

export type ThemeType = keyof typeof colors;
// src/ThemeProvider/colors.ts

export type ColorKeys =
  | "primary"
  | "primary-hover"
  | "primary-disabled"
  | "primary-content"
  | "secondary"
  | "accent"
  | "neutral"
  | "bg"
  | "bg-light"
  | "text"
  | "text-muted"
  | "info"
  | "success"
  | "warning"
  | "error";

/**
 * Colors type
 * ใช้ Record แทน interface mapped type
 */
export type Colors = Record<ColorKeys, string>;

/**
 * Default color tokens
 * ใช้ CSS variables fallback สำหรับ production-ready
 */
export const defaultColors: Colors = {
  primary: "var(--color-primary, #1f2937)",        // dark/navy
  "primary-hover": "var(--color-primary-hover, #111827)",
  "primary-disabled": "var(--color-primary-disabled, #6b7280)",
  "primary-content": "var(--color-primary-content, #ffffff)",
  secondary: "var(--color-secondary, #4b5563)",
  accent: "var(--color-accent, #6b7280)",
  neutral: "var(--color-neutral, #f3f4f6)",
  bg: "var(--color-bg, #ffffff)",
  "bg-light": "var(--color-bg-light, #f9fafb)",
  text: "var(--color-text, #111827)",
  "text-muted": "var(--color-text-muted, #6b7280)",
  info: "var(--color-info, #0ea5e9)",
  success: "var(--color-success, #22c55e)",
  warning: "var(--color-warning, #f59e0b)",
  error: "var(--color-error, #ef4444)",
};
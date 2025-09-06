import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import daisyui from "daisyui";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: "var(--color-primary, #3b82f6)",
        "primary-hover": "var(--color-primary-hover, #2563eb)",
        "primary-disabled": "var(--color-primary-disabled, #6b7280)",
        "primary-content": "var(--color-primary-content, #ffffff)",

        // Secondary & accent
        secondary: "var(--color-secondary, #4b5563)",
        accent: "var(--color-accent, #6b7280)",
        neutral: "var(--color-neutral, #f3f4f6)",

        // Feedback colors
        info: "var(--color-info, #0ea5e9)",
        success: "var(--color-success, #22c55e)",
        warning: "var(--color-warning, #f59e0b)",
        error: "var(--color-error, #ef4444)",

        // Background & text
        bg: "var(--color-bg, #ffffff)",
        "bg-light": "var(--color-bg-light, #f9fafb)",
        text: "var(--color-text, #111827)",
        "text-muted": "var(--color-text-muted, #6b7280)",
      },
      fontFamily: {
        sans: ["var(--font-family-base)", "Kanit", "Noto Sans Thai", "system-ui", "sans-serif"],
      },
      borderRadius: {
        md: "var(--radius-md, 0.5rem)",
      },
      transitionDuration: {
        base: "var(--transition-base, 250ms)",
        fast: "var(--transition-fast, 200ms)",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      maxWidth: {
        container: "1200px",
      },
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [forms, typography, aspectRatio, containerQueries, daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        business: {
          primary: "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",

          secondary: "#4b5563",
          "secondary-focus": "#374151",
          "secondary-content": "#ffffff",

          accent: "#6b7280",
          "accent-focus": "#4b5563",
          "accent-content": "#ffffff",

          neutral: "#f3f4f6",
          "neutral-focus": "#e5e7eb",
          "neutral-content": "#111827",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e5e7eb",

          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};

export default config;

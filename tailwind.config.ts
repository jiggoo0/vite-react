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
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-disabled": "var(--color-primary-disabled)",
        "primary-content": "var(--color-primary-content)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        bg: "var(--color-bg)",
        "bg-light": "var(--color-bg-light)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        sans: "var(--font-family-base, 'Kanit', system-ui, sans-serif)",
      },
      borderRadius: { md: "var(--radius-md, 0px)" },
      transitionDuration: {
        base: "var(--transition-base, 250ms)",
        fast: "var(--transition-fast, 200ms)",
      },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [forms, typography, aspectRatio, containerQueries, daisyui],
  daisyui: {
    themes: [
      {
        business: {
          primary: "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#facc15",
          "secondary-focus": "#eab308",
          "secondary-content": "#1f2937",
          accent: "#22c55e",
          "accent-focus": "#16a34a",
          "accent-content": "#ffffff",
          neutral: "#f3f4f6",
          "neutral-focus": "#d1d5db",
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
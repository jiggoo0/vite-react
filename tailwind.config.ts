import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { lightTheme, darkTheme, teamThemeColors } from "./src/data/theme";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "Inter", "system-ui", "sans-serif"], // Sync with CSS variable
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-disabled": "var(--color-primary-disabled)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        border: "var(--color-border)",
        "border-light": "var(--color-border-light)",
        bg: "var(--color-bg)",
        "bg-light": "var(--color-bg-light)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "300ms",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      { light: lightTheme },
      { dark: darkTheme },
      { team: teamThemeColors },
    ],
    darkTheme: "dark",
  },
  corePlugins: {
    preflight: true, // ใช้ Tailwind reset
  },
};

export default config;

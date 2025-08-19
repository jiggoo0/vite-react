import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-hover": "#1E40AF",
        "primary-disabled": "#9CA3AF",
        secondary: "#9333EA",
        accent: "#F59E0B",
        neutral: "#374151",
        success: "#10B981",
        warning: "#FACC15",
        error: "#EF4444",
        info: "#3B82F6",
        "bg-light": "#F9FAFB",
        "bg-dark": "#1F2937",
        "primary-dark": "#1E3A8A",
        "green-light": "#6EE7B7",
        "gold-light": "#FCD34D",
      },
      fontFamily: {
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0,0,0,0.05)",
        md: "0 4px 12px rgba(0,0,0,0.08)",
        lg: "0 8px 24px rgba(0,0,0,0.12)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "300ms",
        ultra: "500ms",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
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
          primary: "#1E3A8A",
          "primary-hover": "#2563EB",
          "primary-disabled": "#9CA3AF",
          "primary-content": "#ffffff",
          secondary: "#2563EB",
          accent: "#FBBF24",
          neutral: "#374151",
          "base-100": "#F3F4F6",
          "base-200": "#E5E7EB",
          "base-300": "#D1D5DB",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#FACC15",
          error: "#EF4444",
        },
      },
    ],
    darkTheme: "dark",
    styled: true,
    base: true,
    utils: true,
    logs: true,
  },

  corePlugins: {
    container: true,
    float: true,
    objectFit: true,
  },
};

export default config;

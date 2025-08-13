import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

/* =====================================
   Font Definitions
====================================== */
const fontSans = ["Inter", "Noto Sans Thai", "THSarabunNew", "sans-serif"];
const fontBody = ["Roboto", "Noto Sans Thai", "THSarabunNew", "sans-serif"];

/* =====================================
   Tailwind Configuration
====================================== */
const config: Config = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [{ pattern: /^(bg|text|btn)-/ }],

  blocklist: ["debug", "bg-red-500"],

  theme: {
    extend: {
      /* Font Families */
      fontFamily: {
        heading: fontSans,
        body: fontBody,
        th: ["THSarabunNew", "sans-serif"],
        ios: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          "sans-serif",
        ],
      },

      /* Font Sizes */
      fontSize: {
        iosSmall: "13px",
      },

      /* Spacing */
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },

      /* Z-Index */
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        9999: "9999",
      },

      /* Border Radius */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      /* Keyframes */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      /* Animations */
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        fadeInUp: "fadeInUp 0.3s ease-out forwards",
      },

      /* Transitions */
      transitionProperty: {
        spacing: "margin, padding",
        common: "height, opacity, transform",
      },

      /* Colors */
      colors: {
        iosSuccess: "#34C759",
        iosError: "#FF3B30",
        iosWarning: "#FF9500",
        iosInfo: "#5AC8FA",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },

  plugins: [daisyui, typography, forms, aspectRatio],

  /* DaisyUI Themes */
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563eb",
          secondary: "#9333ea",
          accent: "#f59e0b",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        jpbrand: {
          primary: "#1d4ed8",
          secondary: "#d97706",
          accent: "#10b981",
          neutral: "#1e293b",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e5e7eb",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      "dark",
      "business",
    ],
  },
};

export default config;

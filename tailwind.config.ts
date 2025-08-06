// tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    "bg-primary",
    "text-primary",
    {
      pattern: /^btn-/,
    },
    {
      pattern: /^text-/,
    },
  ],

  blocklist: ["debug", "bg-red-500"],

  theme: {
    extend: {
      colors: {
        // Design Token Colors (via CSS Variables)
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        "base-100": "var(--color-base-100)",
        "base-200": "var(--color-base-200)",
        "base-300": "var(--color-base-300)",

        // iOS-specific Notification Colors
        iosSuccess: "#34C759",
        iosError: "#FF3B30",
        iosWarning: "#FF9500",
        iosInfo: "#5AC8FA",

        // DaisyUI default feedback colors
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },

      fontFamily: {
        heading: ["Inter", "Noto Sans Thai", "sans-serif"],
        body: ["Roboto", "Noto Sans Thai", "sans-serif"],
        ios: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          "sans-serif",
        ], // ✅ iOS System Font
      },

      fontSize: {
        iosSmall: "13px", // ✅ Specific to iOS Notification Design
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        9999: "9999", // ✅ Overlay level
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

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

      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        fadeInUp: "fadeInUp 0.3s ease-out forwards",
      },

      transitionProperty: {
        spacing: "margin, padding",
        height: "height",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },

  plugins: [daisyui, typography, forms, aspectRatio],

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

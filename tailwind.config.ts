import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class", // รองรับโหมดมืด
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // scan ไฟล์สำหรับ class
  theme: {
    extend: {
      fontFamily: {
        sarabun: ["THSarabunNew", "Noto Sans Thai", "Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#2563eb",
          dark: "#3b82f6",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      /** 🌞 Light Theme */
      {
        light: {
          primary: "#2563eb",
          "primary-focus": "#1d4ed8",
          "primary-content": "#ffffff",
          secondary: "#9333ea",
          "secondary-focus": "#7e22ce",
          "secondary-content": "#ffffff",
          accent: "#f59e0b",
          "accent-focus": "#d97706",
          "accent-content": "#000000",
          neutral: "#374151",
          "neutral-focus": "#1f2937",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },

      /** 🌙 Dark Theme */
      {
        dark: {
          primary: "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#a78bfa",
          "secondary-focus": "#9333ea",
          "secondary-content": "#000000",
          accent: "#fbbf24",
          "accent-focus": "#f59e0b",
          "accent-content": "#000000",
          neutral: "#d1d5db",
          "neutral-focus": "#9ca3af",
          "neutral-content": "#1f2937",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#374151",
          "base-content": "#f3f4f6",
          info: "#60a5fa",
          success: "#4ade80",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },

      /** 💼 Business Theme */
      "business",
    ],
  },
};

export default config;

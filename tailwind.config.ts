import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: 'class',  // <== เพิ่มตรงนี้
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 สีหลักของโปรเจกต์
        primary: "#2563eb",
        secondary: "#9333ea",
        accent: "#f59e0b",
        neutral: "#374151",
        "base-100": "#ffffff",
        "base-200": "#f3f4f6",
        "base-300": "#e5e7eb",

        // ✅ รองรับ alert / badge / toast
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontFamily: {
        heading: ["Inter", "Noto Sans Thai", "sans-serif"],
        body: ["Roboto", "Noto Sans Thai", "sans-serif"],
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
      },
      animation: {
        fade: "fadeIn 0.5s ease-out",
        slideIn: "slideIn 0.5s ease-out",
      },
      transitionProperty: {
        spacing: "margin, padding",
        height: "height",
      },
    },
  },
  plugins: [
    daisyui,
    typography,
    forms
  ],
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
          primary: "#1d4ed8",      // Navy Blue
          secondary: "#d97706",    // Amber
          accent: "#10b981",       // Emerald
          neutral: "#1e293b",      // Slate
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
      "business"
    ],
  },
};

export default config;
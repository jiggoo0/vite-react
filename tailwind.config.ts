// ✅ tailwind.config.ts (with business theme)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",    // blue-600
        secondary: "#9333ea",  // purple-600
        accent: "#f59e0b",     // amber-500
        neutral: "#374151",    // gray-700
        "base-100": "#ffffff",
        "base-200": "#f3f4f6",
        "base-300": "#e5e7eb",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
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
    },
  },
  plugins: [require("daisyui")],
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
        },
      },
      "dark",     // ✅ รองรับ dark theme
      "business", // ✅ เพิ่มให้ตรงกับ ThemeName ใน theme.ts
    ],
  },
};

export default config;
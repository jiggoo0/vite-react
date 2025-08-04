// ✅ tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ✅ สามารถกำหนดสี, spacing, font, zIndex ฯลฯ เพิ่มเติมที่นี่
      colors: {
        primary: "#2563eb", // ตัวอย่าง: blue-600
        secondary: "#9333ea", // ตัวอย่าง: purple-600
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};

export default config;
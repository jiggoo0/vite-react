// ✅ tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}", // รองรับไฟล์ TS/JS ทุกรูปแบบใน src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Tailwind blue-600 สีหลักของโปรเจกต์
        secondary: "#9333ea", // Tailwind purple-600 สีรอง/Accent
        // เพิ่มเติมถ้าต้องการ เช่น:
        // accent: "#f59e0b", // amber-500
        // neutral: "#374151", // gray-700
      },
      spacing: {
        // กำหนด custom spacing เช่น '72': '18rem',
      },
      fontFamily: {
        // เพิ่มฟอนต์ custom ถ้าต้องการ เช่น 'heading': ['Inter', 'sans-serif']
      },
      zIndex: {
        // กำหนดระดับ z-index custom ถ้าจำเป็น
      },
      borderRadius: {
        // ขยาย radius เช่น 'xl': '1rem'
      },
    },
  },
  plugins: [
    require("daisyui"), // ใช้งาน DaisyUI component library ร่วมกับ Tailwind
  ],
  // ✅ daisyUI config (ถ้าต้องการปรับแต่งธีมเพิ่มเติม)
  // daisyui: {
  //   themes: ["light", "dark"], // เปิดใช้งานธีมที่ต้องการ
  // },
};

export default config;
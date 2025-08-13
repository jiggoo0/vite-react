import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/Router/AppRouter";
import { ThemeProvider } from "@/context/ThemeProvider"; // ✅ เปลี่ยนตรงนี้

// CSS base
import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/index.css"; // เพิ่มการ import index.css ตามที่ขอ

// ตรวจสอบ root element (ปลอดภัย + ล็อก error message)
const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  console.error("❌ ไม่พบ root element ใน DOM (#root)");
  throw new Error("ไม่สามารถ mount React app ได้");
}

// สร้าง React root
const root = ReactDOM.createRoot(rootElement);

// Render แอปทั้งหมด
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

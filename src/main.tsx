import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/Router/AppRouter";
import { ThemeProvider } from "@/context/ThemeProvider";

import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/index.css";

/**
 * 🔹 Entry Point ของแอป React
 * - ตรวจสอบ root element ก่อน mount
 * - ใช้ React.StrictMode
 * - รองรับ React Router DOM และ ThemeContext
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found in DOM (#root)");
  throw new Error("Cannot mount React app without root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

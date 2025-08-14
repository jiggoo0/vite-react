// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Contexts & Providers
import { ThemeProvider } from "@/context/ThemeProvider";

// Router
import AppRouter from "@/Router/AppRouter";

// Styles
import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/index.css";

// Optional: Global Error Boundary
import ErrorBoundary from "@/utils/common/ErrorBoundary";

// 🔹 Log version (จาก package.json หรือ .env)
console.info(`🚀 App version: ${import.meta.env.VITE_APP_VERSION || "dev"}`);

// หา root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found in DOM (#root)");
  throw new Error("Cannot mount React app without root element");
}

const root = ReactDOM.createRoot(rootElement);

// Render App
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
      <ThemeProvider>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้า">
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

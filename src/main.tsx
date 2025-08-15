"use client";

import React, { Suspense } from "react";
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

// Fallback loader สำหรับ Suspense
import FallbackLoader from "@/utils/common/FallbackLoader";

// ---------------------- Root Element ----------------------
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found in DOM (#root)");
  throw new Error("Cannot mount React app without root element");
}

// ---------------------- Render App ----------------------
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
      <ThemeProvider>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้า">
          <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
            <AppRouter />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// ---------------------- Log App Version ----------------------
console.info(`🚀 App version: ${import.meta.env.VITE_APP_VERSION || "dev"}`);

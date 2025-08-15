"use client";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 🌐 Context Providers
import { ThemeProvider } from "@/context/ThemeProvider";

// 🛣 Router
import AppRouter from "@/Router/AppRouter";

// 🎨 Styles
import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/index.css";

// 🛡 Error Handling & Fallbacks
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

// ---------------------- Root Element ----------------------
let rootElement = document.getElementById("root");
if (!rootElement) {
  console.warn("⚠️ Root element not found, creating one dynamically.");
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
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

// ---------------------- Debug Info ----------------------
console.groupCollapsed("📦 App Info");
console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION || "dev");
console.info("🔧 Mode:", import.meta.env.MODE);
console.info("🌍 Base URL:", import.meta.env.BASE_URL);
console.groupEnd();

// ---------------------- PWA / Service Worker ----------------------
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js").catch((err) => {
//     console.error("SW registration failed:", err);
//   });
// }

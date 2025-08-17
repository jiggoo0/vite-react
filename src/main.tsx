"use client";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import AppProviders from "@/context/AppProviders";
import AppRouter from "@/Router/AppRouter";

import "@/styles/global.css";
import "@/index.css";

import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/**
 * 🔹 Ensure root element exists
 * - สร้าง root dynamically ถ้าไม่มี
 */
const ensureRootElement = (): HTMLElement => {
  const existingRoot = document.getElementById("root");
  if (existingRoot) return existingRoot;

  console.warn("⚠️ Root element not found, creating dynamically.");
  const div = document.createElement("div");
  div.id = "root";
  document.body.appendChild(div);
  return div;
};

/**
 * 🌱 React Root
 */
const root = ReactDOM.createRoot(ensureRootElement());

root.render(
  <React.StrictMode>
    <AppProviders>
      <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
        <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </AppProviders>
  </React.StrictMode>
);

/**
 * 📦 Dev Info Logger
 */
if (import.meta.env.DEV) {
  console.groupCollapsed("📦 App Info");
  console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION ?? "dev");
  console.info("📝 Build Time:", import.meta.env.VITE_APP_BUILD_TIME ?? "N/A");
  console.info("🔧 Mode:", import.meta.env.MODE);
  console.info("🌍 Base URL:", import.meta.env.BASE_URL);
  console.groupEnd();
}

/**
 * 🔧 Service Worker Registration (Production)
 */
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("✅ Service Worker registered:", reg.scope))
    .catch((err) => console.error("❌ SW registration failed:", err));
}

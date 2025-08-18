"use client";

import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import AppProviders from "@/context/AppProviders";
import AppRouter from "@/Router/AppRouter";

import "@/styles/global.css";
import "@/index.css";

import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/**
 * 🔹 Ensure root element exists
 */
const ensureRootElement = (): HTMLElement => {
  let root = document.getElementById("root");
  if (!root) {
    console.warn("⚠️ Root element not found. Creating dynamically.");
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }
  return root;
};

/**
 * 🌗 Dynamic Theme Management (Light / Dark)
 */
const useTheme = (): {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () =>
      setTheme(darkMediaQuery.matches ? "dark" : "light");

    updateTheme(); // initial check
    darkMediaQuery.addEventListener("change", updateTheme);

    return () => darkMediaQuery.removeEventListener("change", updateTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return { theme, setTheme };
};

/**
 * 🌱 Root App Component
 */
const RootApp: React.FC = () => {
  useTheme(); // auto switch theme

  return (
    <AppProviders>
      <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
        <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </AppProviders>
  );
};

/**
 * 🌱 React Root Initialization
 */
const root = ReactDOM.createRoot(ensureRootElement());
root.render(
  <React.StrictMode>
    <RootApp />
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
    .then((registration) =>
      console.log("✅ Service Worker registered:", registration.scope)
    )
    .catch((error) =>
      console.error("❌ Service Worker registration failed:", error)
    );
}

/**
 * 📄 Print-Friendly Styles (Global)
 */
if (typeof document !== "undefined") {
  const printStyles = document.createElement("style");
  printStyles.innerHTML = `
    @media print {
      body {
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        color: #000 !important;
        font-size: 12pt !important;
        line-height: 1.5 !important;
      }
      .no-print, nav, footer, .btn, .action-bar { display: none !important; }
      .card-wrapper, .a4-card-wrapper {
        box-shadow: none !important;
        border: 1px solid #ccc !important;
        background: #fff !important;
        border-radius: 0 !important;
        padding: 16px !important;
      }
      .a4-card-wrapper {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 auto !important;
        page-break-after: always;
        overflow: hidden;
      }
      h1,h2,h3,h4,h5,h6,a { color: #000 !important; }
      a { text-decoration: underline !important; }
      table { page-break-inside: avoid; border-collapse: collapse; width: 100%; }
      tr, td, th { page-break-inside: avoid; border: 1px solid #000 !important; padding: 4px; }
      @page { size: A4; margin: 15mm; }
      img { max-width: 100% !important; height: auto !important; }
    }
  `;
  document.head.appendChild(printStyles);
}

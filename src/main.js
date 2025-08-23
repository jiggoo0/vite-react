import { jsx as _jsx } from "react/jsx-runtime";
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "@/App/RootApp";
// ==============================
// Global Styles
// ==============================
import "@styles/fonts.css";
import "@styles/global.css";
import "@styles/theme.css";
import "@styles/variables.css";
import "@styles/driverLicense.css";
// ==============================
// Ensure root element
// ==============================
const ensureRootElement = () => {
    let root = document.getElementById("root");
    if (!root) {
        root = document.createElement("div");
        root.id = "root";
        document.body.appendChild(root);
    }
    return root;
};
// ==============================
// Render App
// ==============================
const root = ReactDOM.createRoot(ensureRootElement());
root.render(_jsx(React.StrictMode, { children: _jsx(RootApp, {}) }));
// ==============================
// Dev Info Logging
// ==============================
if (import.meta.env.DEV) {
    console.groupCollapsed("📦 JP-System App Info");
    console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION ?? "dev");
    console.info("📝 Build Time:", import.meta.env.VITE_APP_BUILD_TIME ?? "N/A");
    console.info("🔧 Mode:", import.meta.env.MODE);
    console.info("🌍 Base URL:", import.meta.env.BASE_URL);
    console.groupEnd();
}
// ==============================
// Service Worker Registration (Prod Only)
// ==============================
if ("serviceWorker" in navigator && import.meta.env.PROD) {
    navigator.serviceWorker
        .register(`${import.meta.env.BASE_URL}sw.js`)
        .then((registration) => console.log("✅ Service Worker registered:", registration.scope))
        .catch((error) => console.error("❌ Service Worker registration failed:", error));
}

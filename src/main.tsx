import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "@/App/RootApp";

// Radix Themes CSS ต้อง import ก่อน CSS อื่น ๆ
import "@radix-ui/themes/styles.css";
import "@/index.css";
import "@styles/global.css";
import "@styles/driverLicense.css";

const ensureRootElement = (): HTMLElement => {
  let root = document.getElementById("root");
  if (!root) {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }
  return root;
};

const root = ReactDOM.createRoot(ensureRootElement());

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

if (import.meta.env.DEV) {
  console.groupCollapsed("📦 JP-System App Info");
  console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION ?? "dev");
  console.info("📝 Build Time:", import.meta.env.VITE_APP_BUILD_TIME ?? "N/A");
  console.info("🔧 Mode:", import.meta.env.MODE);
  console.info("🌍 Base URL:", import.meta.env.BASE_URL);
  console.groupEnd();
}

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register(`${import.meta.env.BASE_URL}sw.js`)
    .then((registration) => console.log("✅ Service Worker registered:", registration.scope))
    .catch((error) => console.error("❌ Service Worker registration failed:", error));
}

export {};

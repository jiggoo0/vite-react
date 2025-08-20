import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "./App/RootApp";

// 🔹 Global Styles
import "./styles/global.css";        // Tailwind + DaisyUI
import "./styles/driverLicense.css"; // Component-specific
import "./styles/variables.css";     // CSS variables
import "./styles/theme.css";         // Theme overrides

/**
 * Ensure root element exists in DOM
 */
const ensureRootElement = (): HTMLElement => {
  let root = document.getElementById("root");
  if (!root) {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }
  return root;
};

// 🔹 Initialize React Root
const root = ReactDOM.createRoot(ensureRootElement());

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

// 🔹 Dev Build Info Logger
if (import.meta.env.DEV) {
  console.groupCollapsed("📦 App Info");
  console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION ?? "dev");
  console.info("📝 Build Time:", import.meta.env.VITE_APP_BUILD_TIME ?? "N/A");
  console.info("🔧 Mode:", import.meta.env.MODE);
  console.info("🌍 Base URL:", import.meta.env.BASE_URL);
  console.groupEnd();
}

// 🔹 Service Worker Registration (Production Only)
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register(`${import.meta.env.BASE_URL}sw.js`)
    .then((registration) => {
      console.log("✅ Service Worker registered:", registration.scope);
    })
    .catch((error) => {
      console.error("❌ Service Worker registration failed:", error);
    });
}

// 🔹 Export empty for HMR compatibility
export {};
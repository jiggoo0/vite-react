import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "./App/RootApp";

import "./styles/global.css";
import "./styles/driverLicense.css";
import "./styles/variables.css";
import "./styles/theme.css";

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
  console.groupCollapsed("📦 App Info");
  console.info("🚀 Version:", import.meta.env.VITE_APP_VERSION ?? "dev");
  console.info("📝 Build Time:", import.meta.env.VITE_APP_BUILD_TIME ?? "N/A");
  console.info("🔧 Mode:", import.meta.env.MODE);
  console.info("🌍 Base URL:", import.meta.env.BASE_URL);
  console.groupEnd();
}

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register(`${import.meta.env.BASE_URL}sw.js`)
    .then((registration) =>
      console.log("✅ Service Worker registered:", registration.scope)
    )
    .catch((error) =>
      console.error("❌ Service Worker registration failed:", error)
    );
}

export {};
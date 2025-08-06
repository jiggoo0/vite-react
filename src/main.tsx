// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/Router/AppRouter";
import "@/styles/global.css";

// หา root element จาก DOM
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// สร้าง root และเรนเดอร์แอปด้วย React.StrictMode และ React Router
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

export {};
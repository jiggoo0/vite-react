import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/Router/AppRouter";
import { ThemeProvider } from "@/context/ThemeProvider";

import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/index.css";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  console.error("❌ ไม่พบ root element ใน DOM (#root)");
  throw new Error("ไม่สามารถ mount React app ได้");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

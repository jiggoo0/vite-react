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
  console.error("❌ Root element not found in DOM (#root)");
  throw new Error("Cannot mount React app without root element");
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

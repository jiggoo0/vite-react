// ✅ src/main.tsx — Entry Point ของ React App + Router + Global Styles

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 🔁 Router & Global Styles
import AppRouter from "@/Router/AppRouter";
import "@/styles/global.css";

// 📌 Mount จุดเริ่มต้นของแอป
const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
"use client";

import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import { AuthProvider } from "./AuthProvider";

/** 🧩 Props สำหรับ AppProviders */
interface AppProvidersProps {
  children: ReactNode;
}

/**
 * 🌐 AppProviders
 *
 * - ครอบคลุม Context หลักของแอป
 * - รองรับ: ThemeProvider, AuthProvider, React Router
 * - ทำให้ทุก Component ในแอปสามารถเข้าถึง Context ได้
 */
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  // Base path ของ React Router (ใช้ BASE_URL จาก Vite)
  const basePath = import.meta.env.BASE_URL?.trim() || "/";

  return (
    <BrowserRouter basename={basePath}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppProviders;

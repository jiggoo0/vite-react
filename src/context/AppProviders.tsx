"use client";

import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * AppProviders
 * -------------------------
 * Wrapper สำหรับ global providers:
 * - React Router (BrowserRouter) สำหรับ routing
 * - ThemeProvider สำหรับธีม Light / Dark / Business
 */
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  // BASE_URL ใช้ import.meta.env หรือ fallback เป็น root "/"
  const basePath = import.meta.env.BASE_URL?.trim() || "/";

  return (
    <BrowserRouter basename={basePath}>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
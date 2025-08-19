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
 * Wrapper component สำหรับจัดการ global providers ของแอป
 * รวม:
 * - React Router (BrowserRouter)
 * - ThemeProvider (จัดการธีม Light / Dark / Business)
 */
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  const basePath = import.meta.env.BASE_URL || "/";

  return (
    <BrowserRouter basename={basePath}>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;

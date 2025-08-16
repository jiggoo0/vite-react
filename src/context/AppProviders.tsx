// src/AppProviders.tsx
"use client";

import React, { ReactNode, FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";

/**
 * 🌐 AppProviders
 * --------------
 * Wrapper สำหรับ context หลักของแอป:
 * - BrowserRouter สำหรับ routing
 * - ThemeProvider สำหรับ theme management
 */
const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;

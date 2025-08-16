"use client";

import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => (
  <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
    <ThemeProvider>{children}</ThemeProvider>
  </BrowserRouter>
);

export default AppProviders;
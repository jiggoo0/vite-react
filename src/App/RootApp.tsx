"use client";

import { FC, Suspense } from "react";
import AppProviders from "@/context/AppProviders";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/**
 * 🌟 RootApp
 *
 * - Wraps the app with all providers (Theme, Auth, Router)
 * - Catches errors with ErrorBoundary
 * - Handles lazy-loaded components with Suspense
 */
const RootApp: FC = () => (
  <AppProviders>
    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  </AppProviders>
);

export default RootApp;

import React, { Suspense } from "react";
import AppProviders from "@/context/AppProviders";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/**
 * RootApp
 * -------------------------
 * ครอบคลุม:
 * - AppProviders (Context Providers)
 * - ErrorBoundary สำหรับจับข้อผิดพลาดของ App
 * - Suspense Loader สำหรับ lazy loaded components
 */
export const RootApp: React.FC = () => (
  <AppProviders>
    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  </AppProviders>
);

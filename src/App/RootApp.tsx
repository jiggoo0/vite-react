"use client";

import { Suspense, FC } from "react";
import AppProviders from "@/context/AppProviders";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/* ==============================
   RootApp
   -------------------------
   Entry point ของแอป:
   - ห่อด้วย global providers
   - รองรับ ErrorBoundary สำหรับ fallback error
   - Suspense สำหรับ lazy-loaded routes / components
============================== */
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

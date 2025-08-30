import { FC, Suspense } from "react";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

/**
 * AppContent
 * -------------------------
 * ครอบคลุม:
 * - ErrorBoundary สำหรับจับ error ของทั้ง App
 * - Suspense Loader สำหรับ lazy loaded components
 */
const AppContent: FC = () => {
  return (
    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppContent;

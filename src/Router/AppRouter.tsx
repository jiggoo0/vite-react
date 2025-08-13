import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";

import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

/** Lazy-loaded pages */
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(
  () => import("@/Home/CustomerAssessmentForm")
);
const Forbidden = lazy(() => import("@/utils/common/403"));

/**
 * 🔹 AppRouter
 * - กำหนด routes หลักของแอป
 * - ใช้ Suspense + FallbackLoader สำหรับ lazy-loading pages
 * - ใช้ ErrorBoundary ครอบเพื่อจัดการ error
 * - รองรับ GuardRoutes และ RoleGuard สำหรับ route ที่ต้อง authentication / role
 */
const AppRouter: FC = () => (
  <>
    <ScrollToTop />

    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในการโหลดหน้าเว็บ">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดหน้า..." />}>
        <Routes>
          {/* Public routes */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<CustomerAssessmentForm />} />
          </Route>

          {/* Authenticated routes */}
          <Route
            element={
              <GuardRoutes>
                <Layout />
              </GuardRoutes>
            }
          >
            <Route path="secret" element={<SecretPage />} />
          </Route>

          {/* Role-based routes */}
          <Route
            path="admin"
            element={
              <RoleGuard allowedRoles={["admin"]}>
                <Layout />
              </RoleGuard>
            }
          >
            <Route
              index
              element={
                <div className="p-6 text-xl font-semibold text-white">
                  🛠️ Admin Dashboard
                </div>
              }
            />
          </Route>

          {/* Forbidden */}
          <Route path="403" element={<Forbidden />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default AppRouter;

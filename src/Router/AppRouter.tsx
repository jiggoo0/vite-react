import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import Layout from "@/Layout/Layout";

// Utils
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

// Guards
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// Lazy-loaded pages
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));

/**
 * AppRouter: จัดการ routing หลักของโปรเจกต์
 */
const AppRouter: FC = () => (
  <>
    {/* Scroll to top on route change */}
    <ScrollToTop />

    {/* Error boundary ครอบทุก route */}
    <ErrorBoundary>
      {/* Suspense สำหรับ fallback ขณะโหลด Lazy components */}
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          {/* Public routes - ไม่มีการตรวจสอบ */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<CustomerAssessmentForm />} />
          </Route>

          {/* Protected routes - ตรวจสอบ login */}
          <Route
            element={
              <GuardRoutes>
                <Layout />
              </GuardRoutes>
            }
          >
            <Route path="secret" element={<SecretPage />} />
          </Route>

          {/* Admin-only routes - ตรวจสอบ role */}
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

          {/* 403 Forbidden */}
          <Route path="403" element={<Forbidden />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default AppRouter;
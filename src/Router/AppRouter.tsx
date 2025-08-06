// src/Router/AppRouter.tsx

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

// Pages (Lazy Loaded)
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));

/**
 * AppRouter - จัดการ Routing ของโปรเจกต์
 * - Public Routes: Home, Login, Form
 * - Protected Routes: SecretPage (เฉพาะผู้เข้าสู่ระบบ)
 * - Admin Routes: เฉพาะ role admin เท่านั้น
 * - 403 Forbidden Page
 */
const AppRouter: FC = () => (
  <>
    {/* Scroll to top on route change */}
    <ScrollToTop />

    {/* Global error boundary */}
    <ErrorBoundary>
      {/* Suspense สำหรับ Lazy Loaded Components */}
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          {/* Public Routes: ใช้ Layout ร่วม */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<CustomerAssessmentForm />} />
          </Route>

          {/* Protected Routes: ต้อง login */}
          <Route element={<GuardRoutes><Layout /></GuardRoutes>}>
            <Route path="secret" element={<SecretPage />} />
          </Route>

          {/* Admin-only Routes: ต้อง role = admin */}
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

          {/* 403 Forbidden Page */}
          <Route path="403" element={<Forbidden />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default AppRouter;
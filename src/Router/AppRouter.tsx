// src/Router/AppRouter.tsx
import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layout & Wrappers
import Layout from "@/Layout/Layout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

// Guards
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// Lazy-loaded Pages
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(
  () => import("@/Home/CustomerAssessmentForm")
);
const IdCardFormPage = lazy(() => import("@/Home/IdCardForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));

const AppRouter: FC = () => (
  <>
    {/* Scroll to top when route changes */}
    <ScrollToTop />

    {/* Global Error Boundary */}
    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในการโหลดหน้าเว็บ">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดหน้า..." />}>
        <Routes>
          {/* --- Public Routes --- */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<CustomerAssessmentForm />} />
          </Route>

          {/* --- Authenticated Routes --- */}
          <Route
            element={
              <GuardRoutes>
                <Layout />
              </GuardRoutes>
            }
          >
            <Route path="secret" element={<SecretPage />} />
            <Route path="id-card" element={<IdCardFormPage />} />
          </Route>

          {/* --- Admin-only Routes --- */}
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
            <Route path="secret" element={<SecretPage />} />
            <Route path="id-card" element={<IdCardFormPage />} />
          </Route>

          {/* --- Error Pages --- */}
          <Route path="403" element={<Forbidden />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default AppRouter;

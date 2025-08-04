// ✅ src/Router/AppRouter.tsx — Production-Ready with Guard & Structure (No 404)

import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import Layout from "@/Layout/Layout";

// Utils & Enhancer
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

// Guards
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// Pages (Lazy Loaded)
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const Secret = lazy(() => import("@/Home/Secret"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const Forbidden = lazy(() => import("@/utils/common/403")); // ✅ Optional

const AppRouter: FC = () => {
  return (
    <>
      <ScrollToTop />

      <ErrorBoundary>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            {/* 🟢 Public */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="form" element={<CustomerAssessmentForm />} />
            </Route>

            {/* 🔒 Protected */}
            <Route
              element={
                <GuardRoutes>
                  <Layout />
                </GuardRoutes>
              }
            >
              <Route path="secret" element={<Secret />} />
            </Route>

            {/* 🛡️ Admin Role */}
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

            {/* 🚫 Forbidden (403) */}
            <Route path="403" element={<Forbidden />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
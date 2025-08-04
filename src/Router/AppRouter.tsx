// src/Router/AppRouter.tsx

import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts & Wrappers
import Layout from "@/Layout/Layout";
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
const NotFound = lazy(() => import("@/utils/common/404"));

const AppRouter: FC = () => (
  <>
    {/* Scroll to top on route change */}
    <ScrollToTop />

    {/* Error boundary for route tree */}
    <ErrorBoundary>
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<CustomerAssessmentForm />} />
          </Route>

          {/* Authenticated Routes */}
          <Route
            element={
              <GuardRoutes>
                <Layout />
              </GuardRoutes>
            }
          >
            <Route path="secret" element={<Secret />} />
          </Route>

          {/* Role-Based Admin Routes */}
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

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default AppRouter;
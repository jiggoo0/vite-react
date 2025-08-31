"use client";

import { FC, Suspense, lazy, ComponentType } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

import ProtectedRoute from "@/Router/ProtectedRoute";
import PublicRoute from "@/Router/PublicRoute";

// ---------- Import Home ตรง ๆ ----------
import Home from "@/Home/Home";

// ---------- Lazy-loaded Pages ----------
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));
const Dashboard = lazy(() => import("@/Home/components/Dashboard/Dashboard"));

// ---------- Suspense + ErrorBoundary Wrapper ----------
const lazyPage = <P extends Record<string, unknown> = Record<string, unknown>>(
  Page: ComponentType<P>,
  props?: P,
  message?: string,
  errorMessage?: string
) => (
  <ErrorBoundary fallbackMessage={errorMessage ?? "เกิดข้อผิดพลาดในหน้า"}>
    <Suspense fallback={<FallbackLoader message={message ?? "กำลังโหลดหน้า..."} />}>
      <Page {...(props ?? ({} as P))} />
    </Suspense>
  </ErrorBoundary>
);

// ---------- App Router ----------
const AppRouter: FC = () => (
  <>
    <ScrollToTop />
    <Routes>
      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/admin">{lazyPage(Login)}</PublicRoute>}
        />
        <Route path="form" element={lazyPage(CustomerAssessmentForm)} />
      </Route>

      {/* Protected Routes */}
      <Route element={<Layout />}>
        <Route
          path="user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              {lazyPage(Dashboard, { role: "user" as const })}
            </ProtectedRoute>
          }
        />
        <Route
          path="manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              {lazyPage(Dashboard, { role: "manager" as const })}
            </ProtectedRoute>
          }
        />
        <Route
          path="secret"
          element={
            <ProtectedRoute allowedRoles={["user", "manager", "admin"]}>
              {lazyPage(SecretPage)}
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route
        path="admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<div className="p-6 text-xl font-semibold text-white">🛠️ Admin Dashboard</div>}
        />
        <Route path="secret" element={lazyPage(SecretPage)} />
        <Route path="dashboard" element={lazyPage(Dashboard, { role: "admin" as const })} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={lazyPage(Forbidden, {}, "กำลังโหลดหน้า 403...")} />
    </Routes>
  </>
);

export default AppRouter;

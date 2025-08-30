"use client";

import { FC, Suspense, lazy, ComponentType } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";
import PublicRoute from "@/Router/PublicRoute";

// ---------- Import Home ตรง ๆ (ไม่ lazy) ----------
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

      {/* Authenticated Routes */}
      <Route
        element={
          <GuardRoutes>
            <Layout />
          </GuardRoutes>
        }
      >
        <Route path="secret" element={lazyPage(SecretPage)} />
        <Route path="user" element={lazyPage(Dashboard, { role: "user" as const })} />
        <Route path="manager" element={lazyPage(Dashboard, { role: "manager" as const })} />
      </Route>

      {/* Admin Routes */}
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

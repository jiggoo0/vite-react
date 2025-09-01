"use client";

import { FC, Suspense, lazy, ComponentType } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Layout from "@/Layout/Layout";
import DashboardLayout from "@/Layout/DashboardLayout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

import ProtectedRoute from "@/Router/ProtectedRoute";
import PublicRoute from "@/Router/PublicRoute";

// ---------- Pages ----------
import Home from "@/Home/Home";
const Login = lazy(() => import("@/Home/Login"));
const AdminTools = lazy(() => import("@/Home/AdminTools"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));
const Dashboard = lazy(() => import("@/Home/components/Dashboard/Dashboard"));
const Profile = lazy(() => import("@/Home/Profile"));
const Settings = lazy(() => import("@/Home/Settings"));

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

// ---------- Dashboard Routes Config ----------
const dashboardRoutes = [
  { path: "user", roles: ["user"] as const, element: Dashboard },
  { path: "user/profile", roles: ["user"] as const, element: Profile },
  { path: "user/settings", roles: ["user"] as const, element: Settings },
  { path: "manager", roles: ["manager"] as const, element: Dashboard },
  { path: "admin/dashboard", roles: ["admin"] as const, element: Dashboard },
];

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

      {/* Protected Dashboard Routes */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["user", "manager", "admin"]}>
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          </ProtectedRoute>
        }
      >
        {dashboardRoutes.map(({ path, roles, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute allowedRoles={roles}>{lazyPage(element)}</ProtectedRoute>}
          />
        ))}
      </Route>

      {/* Admin Exclusive */}
      <Route
        path="admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Layout>
              <Outlet />
            </Layout>
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<div className="p-6 text-xl font-semibold text-white">🛠️ Admin Dashboard</div>}
        />
        <Route path="secret" element={lazyPage(AdminTools)} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={lazyPage(Forbidden, {}, "กำลังโหลดหน้า 403...")} />
    </Routes>
  </>
);

export default AppRouter;

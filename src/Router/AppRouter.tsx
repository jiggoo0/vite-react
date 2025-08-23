// src/Router/AppRouter.tsx
"use client";

import { FC, Suspense, lazy, ComponentType, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// ---------- Lazy-loaded Pages ----------
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));
const IdCardFormPage = lazy(() => import("@/Home/IdCardForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));

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
        <Route index element={lazyPage(Home)} />
        <Route path="login" element={lazyPage(Login)} />
        <Route path="form" element={lazyPage(CustomerAssessmentForm)} />
      </Route>

      {/* Authenticated Routes */}
      <Route element={<GuardRoutes><Layout /></GuardRoutes>}>
        <Route path="secret" element={lazyPage(SecretPage)} />
        <Route path="id-card" element={lazyPage(IdCardFormPage)} />
      </Route>

      {/* Admin Routes */}
      <Route path="admin" element={<RoleGuard allowedRoles={["admin"]}><Layout /></RoleGuard>}>
        <Route index element={<div className="p-6 text-xl font-semibold text-white">🛠️ Admin Dashboard</div>} />
        <Route path="secret" element={lazyPage(SecretPage)} />
        <Route path="id-card" element={lazyPage(IdCardFormPage)} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={lazyPage(Forbidden, {}, "กำลังโหลดหน้า 403...")} />
    </Routes>
  </>
);

export default AppRouter;
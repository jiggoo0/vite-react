import { FC, Suspense, lazy, ReactNode } from "react";
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

// ---------------------- Suspense Wrapper ----------------------
const RouteSuspense: FC<{ children: ReactNode; message?: string }> = ({
  children,
  message,
}) => (
  <Suspense
    fallback={<FallbackLoader message={message || "กำลังโหลดหน้า..."} />}
  >
    {children}
  </Suspense>
);

// ---------------------- Helper to wrap lazy pages ----------------------
const lazyPage = (Page: React.LazyExoticComponent<FC>, message?: string) => (
  <RouteSuspense message={message}>
    <Page />
  </RouteSuspense>
);

// ---------------------- App Router ----------------------
const AppRouter: FC = () => {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในการโหลดหน้าเว็บ">
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route index element={lazyPage(Home)} />
            <Route path="login" element={lazyPage(Login)} />
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
            <Route path="id-card" element={lazyPage(IdCardFormPage)} />
          </Route>

          {/* Admin-only Routes */}
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
            <Route path="secret" element={lazyPage(SecretPage)} />
            <Route path="id-card" element={lazyPage(IdCardFormPage)} />
          </Route>

          {/* Error Pages */}
          <Route
            path="403"
            element={lazyPage(Forbidden, "กำลังโหลดหน้า 403...")}
          />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;

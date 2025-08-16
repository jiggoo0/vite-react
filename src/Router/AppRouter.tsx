import { FC, Suspense, lazy, ReactNode, ComponentType } from "react";
import { Routes, Route } from "react-router-dom";

// 🌐 Layout & Utilities
import Layout from "@/Layout/Layout";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";

// 🛡 Guards
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// 📦 Lazy Imports
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const SecretPage = lazy(() => import("@/Home/SecretPage"));
const CustomerAssessmentForm = lazy(
  () => import("@/Home/CustomerAssessmentForm")
);
const IdCardFormPage = lazy(() => import("@/Home/IdCardForm"));
const Forbidden = lazy(() => import("@/utils/common/403"));

// ======================================================
// Suspense Wrapper
// ======================================================
const RouteSuspense: FC<{ children: ReactNode; message?: string }> = ({
  children,
  message,
}) => (
  <Suspense
    fallback={<FallbackLoader message={message ?? "กำลังโหลดหน้า..."} />}
  >
    {children}
  </Suspense>
);

// ======================================================
// Type-Safe Lazy Page Wrapper
// ======================================================
function lazyPage<P extends object>(
  Page: ComponentType<P>,
  props?: P,
  message?: string
) {
  return (
    <RouteSuspense message={message}>
      <Page {...(props ?? ({} as P))} />
    </RouteSuspense>
  );
}

// ======================================================
// App Router
// ======================================================
const AppRouter: FC = () => (
  <>
    <ScrollToTop />
    <Routes>
      {/* ================== Public Routes ================== */}
      <Route element={<Layout />}>
        <Route
          index
          element={
            <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในหน้า Home">
              {lazyPage(Home)}
            </ErrorBoundary>
          }
        />
        <Route path="login" element={lazyPage(Login)} />
        <Route path="form" element={lazyPage(CustomerAssessmentForm)} />
      </Route>

      {/* ================== Guarded Routes ================== */}
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

      {/* ================== Admin Routes ================== */}
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

      {/* ================== Fallback Routes ================== */}
      <Route
        path="*"
        element={lazyPage(Forbidden, {}, "กำลังโหลดหน้า 403...")}
      />
    </Routes>
  </>
);

export default AppRouter;

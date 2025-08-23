import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
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
// ---------- Suspense Wrapper ----------
const RouteSuspense = ({ children, message, }) => (_jsx(Suspense, { fallback: _jsx(FallbackLoader, { message: message ?? "กำลังโหลดหน้า..." }), children: children }));
// ---------- Lazy Page Helper ----------
const lazyPage = (Page, props, message) => _jsx(RouteSuspense, { message: message, children: _jsx(Page, { ...(props ?? {}) }) });
// ---------- App Router ----------
const AppRouter = () => (_jsxs(_Fragment, { children: [_jsx(ScrollToTop, {}), _jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(ErrorBoundary, { fallbackMessage: "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32 Home", children: lazyPage(Home) }) }), _jsx(Route, { path: "login", element: lazyPage(Login) }), _jsx(Route, { path: "form", element: lazyPage(CustomerAssessmentForm) })] }), _jsxs(Route, { element: _jsx(GuardRoutes, { children: _jsx(Layout, {}) }), children: [_jsx(Route, { path: "secret", element: lazyPage(SecretPage) }), _jsx(Route, { path: "id-card", element: lazyPage(IdCardFormPage) })] }), _jsxs(Route, { path: "admin", element: _jsx(RoleGuard, { allowedRoles: ["admin"], children: _jsx(Layout, {}) }), children: [_jsx(Route, { index: true, element: _jsx("div", { className: "p-6 text-xl font-semibold text-white", children: "\uD83D\uDEE0\uFE0F Admin Dashboard" }) }), _jsx(Route, { path: "secret", element: lazyPage(SecretPage) }), _jsx(Route, { path: "id-card", element: lazyPage(IdCardFormPage) })] }), _jsx(Route, { path: "*", element: lazyPage(Forbidden, {}, "กำลังโหลดหน้า 403...") })] })] }));
export default AppRouter;

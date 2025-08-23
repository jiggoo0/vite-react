import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";
/**
 * AppContent
 * -------------------------
 * ครอบคลุม:
 * - ErrorBoundary สำหรับจับ error ของทั้ง App
 * - Suspense Loader สำหรับ lazy loaded components
 */
const AppContent = () => {
    return (_jsx(ErrorBoundary, { fallbackMessage: "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A \u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E35\u0E40\u0E1F\u0E23\u0E0A\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48", children: _jsx(Suspense, { fallback: _jsx(FallbackLoader, { message: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E2D\u0E1B..." }), children: _jsx(AppRouter, {}) }) }));
};
export default AppContent;

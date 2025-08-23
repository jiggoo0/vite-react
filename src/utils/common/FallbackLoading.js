"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
/**
 * ⏳ FallbackLoading
 *
 * Overlay loader สำหรับ React Suspense หรือ async fetch
 * - backdrop + blur + spinner animation
 * - รองรับ accessibility: aria-busy, role="status", aria-live
 * - สามารถปรับข้อความและ custom class
 */
const FallbackLoading = ({ message = "กำลังโหลด...", className, size = 48, }) => {
    return (_jsx("div", { className: clsx("fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn", className), role: "status", "aria-live": "polite", "aria-busy": "true", children: _jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsxs("svg", { className: "animate-spin text-primary dark:text-primary-dark", style: { width: size, height: size }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })] }), _jsx("p", { className: "text-sm text-base-content/70 dark:text-base-content/60 select-none", children: message })] }) }));
};
export default FallbackLoading;

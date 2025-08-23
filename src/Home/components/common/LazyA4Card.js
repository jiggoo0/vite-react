"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, memo } from "react";
import clsx from "clsx";
import ErrorBoundary from "@utils/common/ErrorBoundary";
/**
 * LazyA4Card
 * - wrapper สำหรับการ์ดที่โหลดแบบ lazy
 * - รองรับ blur + suspense fallback + error boundary
 */
const LazyA4Card = memo(({ children, isBlurred = false, delay = 0, fallback = null, className }) => {
    return (_jsx("div", { className: clsx("bg-white rounded-xl shadow-md p-6 w-full transition-all duration-500 animate-fadeInUp", 
        // note: Tailwind delay utility ต้องเป็น fixed class เช่น delay-100, delay-200
        `delay-${delay}`, isBlurred && "blur-sm pointer-events-none select-none", className), children: _jsx(ErrorBoundary, { fallbackMessage: "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E19\u0E35\u0E49", children: fallback ? (_jsx(Suspense, { fallback: fallback, children: children })) : (children) }) }));
});
LazyA4Card.displayName = "LazyA4Card";
export default LazyA4Card;

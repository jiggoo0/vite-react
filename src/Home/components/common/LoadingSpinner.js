"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
/**
 * LoadingSpinner
 * - spinner แบบวงกลมหมุน
 * - รองรับ 3 ขนาด: sm, md, lg
 */
const LoadingSpinner = memo(({ size = "md" }) => {
    const sizeClass = clsx({
        "w-6 h-6": size === "sm",
        "w-10 h-10": size === "md",
        "w-16 h-16": size === "lg",
    });
    return (_jsx("div", { className: clsx("mx-auto animate-spin rounded-full border-4 border-t-4 border-gray-300", sizeClass), role: "status", "aria-label": "Loading content..." }));
});
LoadingSpinner.displayName = "LoadingSpinner";
export default LoadingSpinner;

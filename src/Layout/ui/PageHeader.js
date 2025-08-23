"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
/**
 * PageHeader Component
 * --------------------
 * - ใช้แสดงหัวข้อหลักของหน้า
 * - รองรับ subtitle และ action buttons
 * - Flat, professional UI
 */
const PageHeader = ({ title, subtitle, actions, className, }) => {
    return (_jsxs("header", { className: clsx("w-full border-b border-base-200 dark:border-zinc-800 mb-6 pb-4", "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", className), "aria-label": "\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-xl font-semibold text-base-content dark:text-white", children: title }), subtitle && (_jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: subtitle }))] }), actions && _jsx("div", { className: "flex items-center gap-2", children: actions })] }));
};
PageHeader.displayName = "PageHeader";
export default PageHeader;

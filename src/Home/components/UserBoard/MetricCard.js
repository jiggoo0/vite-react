"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
/**
 * MetricCard
 * -------------------------
 * แสดง Metric card สำหรับ Trust Dashboard
 * - Responsive
 * - Professional UI
 * - Accessible
 * - รองรับ Icon แบบ optional
 */
const MetricCard = ({ label, value, icon, className }) => {
    return (_jsxs("div", { role: "group", "aria-label": label, className: clsx("flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[160px]", className), children: [icon && _jsx("div", { className: "text-primary dark:text-primary-light", children: icon }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: label }), _jsx("span", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: value })] })] }));
};
MetricCard.displayName = "MetricCard";
export default MetricCard;

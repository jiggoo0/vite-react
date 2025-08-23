"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
/**
 * BadgeCard
 * -------------------------
 * แสดง Badge / ไอคอนพร้อมชื่อและคำอธิบาย
 * - Responsive
 * - Professional UI
 * - Accessible
 */
const BadgeCard = ({ icon, title, description, className }) => {
    return (_jsxs("div", { role: "group", "aria-label": title, className: clsx("flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 w-40 text-center", className), children: [_jsx("div", { className: "mb-2", children: icon }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: title }), description && (_jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mt-1", children: description }))] }));
};
BadgeCard.displayName = "BadgeCard";
export default BadgeCard;

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
/**
 * PageSection
 * - Section ทั่วไปสำหรับ layout
 * - รองรับ background class และ container class
 * - รองรับ accessibility ด้วย title สำหรับ screen reader
 */
const PageSection = ({ id, children, bgClass = "bg-base-100", className, title, }) => {
    return (_jsxs("section", { id: id, className: clsx(bgClass, "py-16 px-4 md:px-8", className), role: "region", "aria-label": title, children: [title && _jsx("h2", { className: "sr-only", children: title }), children] }));
};
export default PageSection;

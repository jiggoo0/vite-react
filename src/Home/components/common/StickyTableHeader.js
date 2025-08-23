"use client";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * StickyTableHeader Component
 * ---------------------------
 * - ทำให้ thead/table header ติดอยู่ด้านบนเวลา scroll
 * - ใช้กับตารางที่มีข้อมูลยาว
 */
const StickyTableHeader = ({ children }) => {
    return (_jsx("div", { className: "overflow-x-auto", children: _jsx("table", { className: "min-w-full border-collapse", children: _jsx("thead", { className: "sticky top-0 bg-gray-100 z-10", children: children }) }) }));
};
StickyTableHeader.displayName = "StickyTableHeader";
export default StickyTableHeader;

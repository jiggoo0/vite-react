// ✅ src/utils/common/403.tsx — Forbidden (403) Page
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
/**
 * ❌ Forbidden Page (403)
 *
 * - แสดงข้อความเมื่อผู้ใช้ไม่มีสิทธิ์เข้าถึงหน้า
 * - มีลิงก์กลับไปหน้าหลัก
 * - รองรับ dark mode, responsive, accessibility
 */
const Forbidden = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] px-4 text-center", children: [_jsx("h1", { className: "text-6xl sm:text-7xl font-extrabold text-red-600 mb-4", children: "403" }), _jsx("p", { className: "text-lg sm:text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300", children: "\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49" }), _jsx(Link, { to: "/", className: "inline-block rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition", "aria-label": "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01", children: "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01" })] }));
};
export default Forbidden;

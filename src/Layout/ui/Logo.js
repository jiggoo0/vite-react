import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import clsx from "clsx";
/**
 * 🎨 Logo Component
 * - แสดงโลโก้ JP Visual & Docs พร้อมลิงก์ไปหน้าแรก
 * - รองรับ accessibility, dark mode และ responsive sizing
 */
const Logo = () => (_jsxs(Link, { to: "/", "aria-label": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 JP Visual & Docs", className: clsx("inline-flex items-center space-x-2", "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", "transition-colors duration-200"), children: [_jsx("img", { src: "/logo.webp", alt: "\u0E42\u0E25\u0E42\u0E01\u0E49 JP Visual & Docs", loading: "lazy", decoding: "async", className: clsx("h-8 w-8 sm:h-10 sm:w-10 rounded-md object-contain", "dark:brightness-90"), "aria-hidden": "true" }), _jsx("span", { className: clsx("text-lg sm:text-xl font-bold select-none tracking-tight", "text-primary dark:text-primary-content"), children: "JP Visual & Docs" })] }));
export default Logo;

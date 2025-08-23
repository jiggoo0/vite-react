"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * SecretDescription
 * -------------------------
 * แสดงข้อความต้อนรับผู้ใช้และบทบาทในระบบ
 * - Responsive
 * - Accessible
 * - Professional UI
 */
const SecretDescription = ({ user }) => {
    return (_jsxs("section", { "aria-labelledby": "secret-description-title", className: "mb-8 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md\n                 hover:shadow-lg transition-shadow duration-300", children: [_jsx("h2", { id: "secret-description-title", className: "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "\uD83C\uDFAF \u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01" }), _jsxs("p", { className: "mb-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg", children: ["\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A", " ", _jsx("strong", { className: "text-primary dark:text-primary-light", children: user.username }), " ", "\uD83D\uDC4B \u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E41\u0E25\u0E49\u0E27\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19"] }), _jsxs("p", { className: "text-gray-700 dark:text-gray-300 text-base sm:text-lg", children: ["\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E1B\u0E47\u0E19", " ", _jsx("strong", { className: "capitalize text-secondary dark:text-secondary-light", children: user.role })] }), _jsx("div", { className: "mt-4 h-1 w-20 bg-primary dark:bg-primary-light rounded-full opacity-70" })] }));
};
SecretDescription.displayName = "SecretDescription";
export default SecretDescription;

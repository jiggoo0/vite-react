// src/Home/components/SecretSection/KbankIOSNotification.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { kbankMockData, } from "@__mocks__/KbankIOSNotification.mock";
import KbankNotificationCard from "./KbankNotificationCard";
const LOAD_DELAY_MS = 700;
// ==============================
// Skeleton Loader Component
// ==============================
const SkeletonLoader = () => (_jsx("section", { className: "space-y-4 max-w-md mx-auto animate-pulse", "aria-label": "Loading KBank notifications", role: "status", "aria-live": "polite", children: [...Array(3)].map((_, idx) => (_jsxs("div", { className: "bg-white border border-gray-200 rounded-3xl p-4 shadow space-y-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-7 h-7 bg-gray-200 rounded-sm" }), _jsx("div", { className: "w-8 h-8 bg-gray-200 rounded-full" }), _jsxs("div", { className: "flex-1 space-y-1", children: [_jsx("div", { className: "h-3 w-2/3 bg-gray-200 rounded" }), _jsx("div", { className: "h-2 w-1/3 bg-gray-200 rounded" })] })] }), _jsx("div", { className: "h-3 bg-gray-200 rounded w-full" }), _jsxs("div", { className: "flex justify-between mt-2", children: [_jsx("div", { className: "h-2 w-1/4 bg-gray-200 rounded" }), _jsx("div", { className: "h-2 w-1/4 bg-gray-200 rounded" })] })] }, idx))) }));
// ==============================
// Empty State Component
// ==============================
const EmptyState = () => (_jsx("section", { className: "min-h-[120px] flex items-center justify-center bg-base-100 rounded-3xl shadow-md p-6 border border-gray-200", "aria-live": "polite", "aria-label": "No notifications", children: _jsx("p", { className: "text-gray-500 select-none", children: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49" }) }));
// ==============================
// Main Component
// ==============================
const KbankIOSNotification = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotifications(kbankMockData);
            setLoading(false);
        }, LOAD_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);
    if (loading)
        return _jsx(SkeletonLoader, {});
    if (notifications.length === 0)
        return _jsx(EmptyState, {});
    return (_jsx("section", { className: "space-y-4 max-w-md mx-auto", role: "list", "aria-label": `รายการแจ้งเตือนธุรกรรมทั้งหมด ${notifications.length} รายการ`, children: notifications.map((item) => (_jsx(KbankNotificationCard, { data: item }, item.id))) }));
};
export default KbankIOSNotification;

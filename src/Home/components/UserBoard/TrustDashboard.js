"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MetricCard from "./MetricCard";
import TrustBadge from "./TrustBadge";
/**
 * TrustDashboard
 * -------------------------
 * แสดงข้อมูลความน่าเชื่อถือของบริษัท:
 * - Metrics: ข้อมูล KPI ของทีม
 * - Stats: ข้อมูลตัวเลขสำคัญ
 * - Badges: แสดงความน่าเชื่อถือและมาตรฐาน
 * - Responsive, professional, accessible
 */
const TrustDashboard = ({ metrics, stats, badges }) => {
    return (_jsxs("section", { "aria-labelledby": "trust-dashboard-title", className: "bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-8 space-y-10", children: [_jsx("h2", { id: "trust-dashboard-title", className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6", children: "\uD83D\uDEE1\uFE0F Trust & Performance Dashboard" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: metrics.map((metric) => (_jsx(MetricCard, { label: metric.label, value: metric.value }, metric.key))) }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6", children: stats.map((stat) => (_jsxs("div", { className: "bg-primary/10 dark:bg-primary/20 p-4 rounded-lg text-center", children: [_jsx("p", { className: "text-sm sm:text-base text-gray-700 dark:text-gray-300", children: stat.label }), _jsx("p", { className: "text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mt-1", children: stat.count })] }, stat.key))) }), _jsx("div", { className: "flex flex-wrap justify-center gap-6 mt-6", children: badges.map((badge) => (_jsx(TrustBadge, { icon: badge.icon, title: badge.title, description: badge.description }, badge.id))) })] }));
};
TrustDashboard.displayName = "TrustDashboard";
export default TrustDashboard;

"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
const TrustBadge = ({ count, label = "ลูกค้ามั่นใจในเรา", className, }) => {
    return (_jsx("div", { className: "flex flex-col items-center", children: _jsxs(motion.div, { whileHover: { scale: 1.08 }, whileTap: { scale: 0.95 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: cn("flex flex-col md:flex-row items-center gap-2 md:gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400", className), role: "status", "aria-roledescription": "statistic", "aria-live": "polite", "aria-label": `${count}+ ${label}`, title: `${count}+ ${label}`, tabIndex: 0, children: [_jsxs("span", { className: "text-2xl md:text-3xl font-extrabold text-white", children: [count, "+"] }), _jsx("span", { className: "text-sm md:text-base font-medium text-white text-center md:text-left", children: label })] }) }));
};
export default TrustBadge;

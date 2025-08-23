"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
/** =======================
 * Hero Badge Component
 * ======================= */
const HeroBadge = () => {
    return (_jsxs(motion.div, { role: "status", "aria-label": "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22\u0E41\u0E1A\u0E1A\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }, whileHover: { scale: 1.05 }, className: "\n        inline-flex items-center gap-2 rounded-full\n        border border-green-500/30 bg-neutral-900/60\n        px-4 py-1 text-sm text-white shadow-lg\n        backdrop-blur-md\n      ", children: [_jsx(BadgeCheck, { className: "w-4 h-4 text-green-400 shrink-0", strokeWidth: 2.2, "aria-hidden": "true" }), _jsx("span", { className: "font-medium tracking-tight whitespace-nowrap", children: "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E25\u0E38\u0E22\u0E41\u0E1A\u0E1A\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E" })] }));
};
export default HeroBadge;

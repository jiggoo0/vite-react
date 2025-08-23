"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ShieldCheck, Clock4, Zap } from "lucide-react";
/** =======================
 * Hero Stats Data
 * ======================= */
const stats = [
    {
        icon: ShieldCheck,
        color: "text-green-500",
        label: "ความลับปลอดภัย",
    },
    {
        icon: Clock4,
        color: "text-yellow-400",
        label: "งานไวใน 24 ชม.",
    },
    {
        icon: Zap,
        color: "text-blue-500",
        label: "พร้อมลุยทุกเคส",
    },
];
/** =======================
 * Framer Motion Variants
 * ======================= */
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
};
/** =======================
 * HeroStats Component
 * ======================= */
const HeroStats = () => {
    return (_jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, role: "list", "aria-label": "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E21 JP Visual & Docs", className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4", children: stats.map(({ icon: Icon, color, label }, index) => (_jsxs(motion.div, { variants: itemVariants, role: "listitem", tabIndex: 0, className: "\n            flex flex-col items-center gap-3 \n            rounded-3xl border border-neutral-700 \n            bg-neutral-900/90 px-8 py-6 shadow-lg text-center\n            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2\n            transition-shadow duration-300 hover:shadow-xl cursor-pointer\n          ", children: [_jsx(Icon, { className: `${color} w-8 h-8`, strokeWidth: 2.2, "aria-hidden": "true" }), _jsx("span", { className: "text-base font-semibold text-white whitespace-nowrap", children: label })] }, index))) }));
};
export default HeroStats;

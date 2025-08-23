"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Rocket, TimerReset } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
};
const SpeedGuaranteeBanner = ({ className, title = "คิวด่วนพร้อม — งานไว เนียน ส่งตามนัด", desc = "รองรับงานเร่ง 24 ชม.* ตามระดับความยาก + คิวที่ว่าง", bullets = [
    "จัดคิวทันทีหลังยืนยันขอบเขต",
    "อัปเดตสถานะโปร่งใส",
    "ส่งไฟล์ปลอดภัย ลิงก์หมดอายุ",
], contactHref = "https://line.me/R/ti/p/@yourid", }) => {
    return (_jsx("section", { className: clsx("py-6 bg-base-100", className), role: "region", "aria-labelledby": "speed-banner-title", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { className: "alert flex flex-col md:flex-row items-start md:items-center bg-base-200 shadow-lg rounded-xl gap-4 p-4 md:p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, children: [_jsx(motion.div, { whileHover: { rotate: [0, 15, -15, 0] }, whileTap: { scale: 0.9 }, className: "flex-shrink-0", children: _jsx(Rocket, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { id: "speed-banner-title", className: "font-semibold text-lg md:text-xl", children: title }), _jsx("p", { className: "text-sm text-base-content/80 mt-1", children: desc }), _jsx("ul", { className: "mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-1 text-sm", "aria-label": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E04\u0E34\u0E27\u0E14\u0E48\u0E27\u0E19", children: bullets.map((b, i) => (_jsxs(motion.li, { custom: i, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.3 }, variants: bulletVariants, tabIndex: 0, className: "flex items-center gap-2 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors hover:text-primary focus:text-primary", children: [_jsx(TimerReset, { className: "w-4 h-4 text-primary flex-shrink-0", "aria-hidden": "true" }), _jsx("span", { className: "text-base-content/80", children: b })] }, i))) })] }), _jsx(motion.a, { href: contactHref, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "mt-3 md:mt-0 md:ml-auto btn btn-primary transition-transform focus:outline-none focus:ring-2 focus:ring-primary", "aria-label": "\u0E04\u0E38\u0E22\u0E40\u0E23\u0E48\u0E07\u0E14\u0E48\u0E27\u0E19\u0E1C\u0E48\u0E32\u0E19 LINE", children: "\u0E04\u0E38\u0E22\u0E40\u0E23\u0E48\u0E07\u0E14\u0E48\u0E27\u0E19" })] }) }) }));
};
export default SpeedGuaranteeBanner;

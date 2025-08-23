"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const AboutTitle = () => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20, scale: 0.98 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.6, ease: "easeOut" }, viewport: { once: true }, className: "text-center mb-8", children: [_jsx(motion.h2, { id: "about-title", "aria-label": "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D JP Visual & Docs", className: "font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-base-content", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, children: _jsx("span", { className: "inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm", children: "JP Visual & Docs" }) }), _jsx(motion.div, { className: "mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent", initial: { width: 0 }, animate: { width: 96 }, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } })] }));
};
export default AboutTitle;

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
/**
 * ✅ AboutQuote Component
 * - Fade-in + slide-up animation
 * - Responsive typography
 * - Accessible via aria-label
 */
const AboutQuote = () => {
    return (_jsx(motion.figure, { initial: { opacity: 0, y: 30, scale: 0.98 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.6, ease: "easeOut" }, viewport: { once: true }, className: "mt-24 px-4 text-center max-w-3xl mx-auto", "aria-label": "\u0E04\u0E15\u0E34\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E17\u0E35\u0E21 JP Visual & Docs", children: _jsxs("blockquote", { className: "relative border-l-4 border-primary pl-6 text-base md:text-lg italic text-base-content/80 leading-relaxed", children: [_jsx("span", { className: "absolute -top-6 left-0 text-6xl text-primary/20 select-none", children: "\u201C" }), _jsxs("span", { className: "relative z-10 text-xl md:text-2xl font-semibold", children: ["\u0E22\u0E34\u0E19\u0E14\u0E35\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E2A\u0E32\u0E22 \u0E27\u0E07\u0E01\u0E32\u0E23\u0E01\u0E0E\u0E02\u0E49\u0E2D\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E04\u0E37\u0E2D", " ", _jsx("span", { className: "text-primary", children: "\u0E04\u0E27\u0E32\u0E21\u0E25\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32" })] })] }) }));
};
export default AboutQuote;

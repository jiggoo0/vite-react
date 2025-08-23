"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
/** =======================
 * Hero Background Component
 * ======================= */
const HeroBackground = ({ className = "" }) => {
    const ref = useRef(null);
    // Scroll progress for parallax effects
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // Parallax transformations
    const yGlow = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const yDots = useTransform(scrollYProgress, [0, 1], [0, 30]);
    return (_jsxs(motion.div, { ref: ref, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2, ease: "easeOut" }, "aria-hidden": "true", className: `pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`, children: [_jsx(motion.div, { style: { y: yGlow }, className: "\n          absolute -top-32 left-1/2 -translate-x-1/2 \n          w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] \n          rounded-full bg-blue-500/20 blur-3xl z-10\n        " }), _jsx(motion.div, { style: { y: yDots }, className: "\n          absolute inset-0 \n          bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] \n          [background-size:30px_30px] \n          opacity-10 \n          z-20\n        " }), _jsx("div", { className: "absolute inset-0 z-0 opacity-10", children: _jsxs("picture", { children: [_jsx("source", { srcSet: "/images/hero-bg.webp", type: "image/webp" }), _jsx("img", { src: "/images/hero-bg.webp", alt: "", className: "w-full h-full object-cover object-center", loading: "eager", decoding: "async", "aria-hidden": "true" })] }) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-base-100/80 via-transparent to-base-100/60 z-30" })] }));
};
export default HeroBackground;

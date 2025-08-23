"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
const AboutImage = () => {
    const [loaded, setLoaded] = useState(false);
    return (_jsx(motion.figure, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, viewport: { once: true }, className: "pt-6 text-center", children: _jsx("img", { src: "/signature.webp", alt: "\u0E25\u0E32\u0E22\u0E40\u0E0B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E19\u0E48\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E16\u0E37\u0E2D\u0E02\u0E2D\u0E07 JP Visual & Docs", className: `mx-auto w-32 sm:w-40 md:w-48 opacity-80 transition-all duration-500 
          ${loaded ? "blur-0 scale-100" : "blur-sm scale-95"} 
          hover:scale-105 hover:opacity-100`, loading: "lazy", decoding: "async", fetchPriority: "low", onLoad: () => setLoaded(true) }) }));
};
export default AboutImage;

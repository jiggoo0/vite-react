"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import clsx from "clsx";
// Animation variants
const variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};
// REDACTED label component
const Redact = ({ label = "REDACTED" }) => (_jsx("span", { className: "bg-black text-black px-1 rounded-sm select-none", children: label }));
const CaseStudyRedacted = ({ className, items, headline = "ตัวอย่างผลงานของเรา", subline = "บางข้อมูลถูกซ่อนเพื่อความเป็นส่วนตัวและปลอดภัย", }) => {
    return (_jsx("section", { className: clsx("py-12 md:py-16", className), children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-semibold", children: headline }), _jsx("p", { className: "opacity-80 mt-2", children: subline })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: items.map((item, idx) => (_jsxs(motion.article, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, transition: { delay: idx * 0.05, duration: 0.4 }, variants: variants, className: "bg-base-200 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow", children: [_jsxs("figure", { className: "relative", children: [_jsx("img", { src: item.imageSrc, alt: item.title, loading: "lazy", className: "w-full h-48 object-cover transition-transform duration-300 hover:scale-105" }), _jsx("div", { className: "absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-white text-xs", children: "REDACTED" })] }), _jsxs("div", { className: "p-5", children: [_jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [item.title, item.redactedFields?.includes("client") && _jsx(Redact, {})] }), _jsxs("p", { className: "text-gray-700 dark:text-gray-300 opacity-90 mb-3", children: [item.summary, " ", item.redactedFields?.includes("brand") && _jsx(Redact, { label: "BRAND" })] }), item.tags?.length ? (_jsx("div", { className: "flex flex-wrap gap-2", children: item.tags.map((tag) => (_jsx("span", { className: "inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded", children: tag }, tag))) })) : null] })] }, item.id))) })] }) }));
};
CaseStudyRedacted.displayName = "CaseStudyRedacted";
export default CaseStudyRedacted;

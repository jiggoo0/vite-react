"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
/**
 * TabPanel Component
 * -----------------
 * - แสดงหลาย tab พร้อม switch content
 * - Flat, professional UI
 * - Responsive, accessible
 */
const TabPanel = ({ tabs, children, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    if (tabs.length !== children.length) {
        console.warn("จำนวน tabs และ children ไม่ตรงกัน");
    }
    return (_jsxs("div", { className: clsx("w-full", className), children: [_jsx("div", { className: "flex border-b border-gray-200 dark:border-zinc-700", children: tabs.map((tab, index) => {
                    const isActive = index === activeIndex;
                    return (_jsx("button", { type: "button", className: clsx("px-4 py-2 text-sm font-medium transition-colors", isActive
                            ? "border-b-2 border-primary text-primary"
                            : "text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"), onClick: () => setActiveIndex(index), children: tab }, tab));
                }) }), _jsx("div", { className: "mt-4", children: children.map((child, index) => (_jsx("div", { className: clsx({ hidden: index !== activeIndex }), role: "tabpanel", "aria-hidden": index !== activeIndex, children: child }, index))) })] }));
};
TabPanel.displayName = "TabPanel";
export default TabPanel;

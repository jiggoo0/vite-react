"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import clsx from "clsx";
const PortfolioFilter = ({ categories, activeCategory, onChange, }) => {
    // Memoized click handler
    const handleClick = useCallback((category) => () => onChange(category), [onChange]);
    return (_jsx("div", { role: "group", "aria-label": "\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14 Portfolio", className: "flex flex-wrap gap-3", children: categories.map((category) => {
            const isActive = activeCategory === category;
            return (_jsx("button", { type: "button", onClick: handleClick(category), className: clsx("px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", isActive
                    ? "bg-primary text-white border-primary shadow"
                    : "bg-base-100 text-base-content border-neutral-300 hover:bg-base-200"), "aria-pressed": isActive, children: category }, category));
        }) }));
};
PortfolioFilter.displayName = "PortfolioFilter";
export default PortfolioFilter;

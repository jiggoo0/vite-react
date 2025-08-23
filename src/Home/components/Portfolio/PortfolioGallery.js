"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import { portfolioItems } from "@/data/portfolioItems";
import { cn } from "@/utils/cn";
import PortfolioFilter from "./ui/PortfolioFilter";
import PortfolioCTA from "./ui/PortfolioCTA";
export { default as FilterButton } from "./ui/FilterButton";
const PortfolioGallery = () => {
    // สร้างรายการ categories แบบ unique
    const categories = useMemo(() => Array.from(new Set(portfolioItems.map((item) => item.category))), []);
    const [activeCategory, setActiveCategory] = useState(() => categories[0] ?? "");
    // กรอง items ตาม category
    const filteredItems = useMemo(() => portfolioItems.filter((item) => item.category === activeCategory), [activeCategory]);
    const handleCategoryChange = useCallback((category) => {
        setActiveCategory(category);
    }, []);
    return (_jsxs("section", { id: "portfolio-gallery", "aria-labelledby": "portfolio-gallery-title", className: "space-y-8", children: [_jsx("h2", { id: "portfolio-gallery-title", className: "sr-only", children: "\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32" }), _jsx(PortfolioFilter, { categories: categories, activeCategory: activeCategory, onChange: handleCategoryChange }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filteredItems.map(({ id, image, title, category, link }) => (_jsxs("article", { tabIndex: 0, "aria-label": `Portfolio item: ${title}`, className: cn("overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary", "dark:bg-neutral-900 dark:shadow-gray-800/50"), children: [_jsx("img", { src: image, alt: title, className: "h-48 w-full object-cover transition-transform duration-300 hover:scale-105", loading: "lazy", decoding: "async" }), _jsxs("div", { className: "space-y-2 p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-base-content", children: title }), _jsx("p", { className: "text-sm text-muted", children: category }), link && (_jsx("div", { className: "pt-2", children: _jsx(PortfolioCTA, { href: link }) }))] })] }, id))) })] }));
};
export default PortfolioGallery;

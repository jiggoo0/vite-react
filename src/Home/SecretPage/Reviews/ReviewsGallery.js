"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { motion } from "framer-motion";
// Motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
const ReviewsGallery = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return _jsx("p", { className: "text-center text-gray-500", children: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E35\u0E27\u0E34\u0E27\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49" });
    }
    return (_jsx(motion.section, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", variants: containerVariants, initial: "hidden", animate: "visible", "aria-label": "Gallery \u0E23\u0E35\u0E27\u0E34\u0E27", children: reviews.map((review, idx) => (_jsxs(motion.div, { className: "bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col", custom: idx, variants: fadeInUp, children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("img", { src: review.avatarUrl || "/images/default-avatar.png", alt: `${review.reviewerName} avatar`, className: "w-12 h-12 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: review.reviewerName }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: new Date(review.date).toLocaleDateString("th-TH", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    }) })] })] }), _jsx("div", { className: "mb-4 flex items-center", children: Array.from({ length: 5 }).map((_, i) => (_jsx("span", { className: `text-yellow-400 ${i < review.rating ? "opacity-100" : "opacity-30"}`, "aria-hidden": "true", children: "\u2605" }, i))) }), _jsx("p", { className: "text-gray-700 dark:text-gray-300 text-sm sm:text-base", children: review.comment })] }, review.id))) }));
};
ReviewsGallery.displayName = "ReviewsGallery";
export default memo(ReviewsGallery);

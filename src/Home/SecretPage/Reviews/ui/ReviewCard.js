"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
const ReviewCard = ({ id, name, image, comment }) => (_jsxs("article", { className: "bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center animate-fadeInUp transition-transform duration-300 hover:scale-[1.02]", "aria-label": `รีวิวจาก ${name}`, children: [_jsx("img", { src: image, alt: `Avatar ของ ${name}`, className: "w-24 h-24 object-cover rounded-full border mb-4", loading: "lazy", draggable: false }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: name }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base", children: comment })] }, id));
ReviewCard.displayName = "ReviewCard";
export default memo(ReviewCard);

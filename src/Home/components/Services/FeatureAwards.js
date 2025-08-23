"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";
import clsx from "clsx";
const awards = [
    {
        icon: _jsx(BadgeCheck, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }),
        title: "",
        description: " 4,000 ",
    },
    {
        icon: _jsx(ShieldCheck, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }),
        title: "",
        description: " ",
    },
    {
        icon: _jsx(Award, { className: "h-6 w-6 text-primary", "aria-hidden": "true" }),
        title: "",
        description: "",
    },
];
const FeatureAwards = ({ className }) => (_jsxs("section", { "aria-labelledby": "awards-title", role: "region", className: clsx("mt-12", className), children: [_jsx("h3", { id: "awards-title", className: "sr-only", children: "\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A\u001A" }), _jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: awards.map(({ icon, title, description }, index) => (_jsxs("article", { tabIndex: 0, role: "listitem", className: clsx("flex items-start space-x-4 rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm transition-shadow duration-300 ease-in-out", "hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus:outline-none"), children: [_jsx("div", { className: "flex-shrink-0", children: icon }), _jsxs("div", { children: [_jsx("h4", { className: "text-base font-semibold text-base-content", children: title }), _jsx("p", { className: "text-sm text-base-content/70", children: description })] })] }, index))) })] }));
export default FeatureAwards;

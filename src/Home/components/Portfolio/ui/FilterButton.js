"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
const FilterButton = ({ label, isActive, onClick }) => {
    return (_jsx("button", { type: "button", onClick: onClick, "aria-pressed": isActive, className: cn("px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary", isActive
            ? "bg-primary text-white border-primary shadow"
            : "bg-base-100 text-base-content border-base-300 hover:bg-base-200 hover:border-base-400"), children: label }));
};
FilterButton.displayName = "FilterButton";
export default FilterButton;

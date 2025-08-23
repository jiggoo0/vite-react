"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { buttonSizeClasses, buttonVariantClasses, } from "./button.styles";
/**
 * 🔹 Button Component
 *
 * - รองรับ variant และ size
 * - รองรับ loading state และ icons
 * - รองรับ fullWidth
 * - ออกแบบให้ accessible (focus, aria-busy, aria-label)
 */
const Button = ({ children, variant = "primary", size = "md", className, type = "button", fullWidth = false, loading = false, disabled, iconLeft, iconRight, ...props }) => {
    const loaderSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
    return (_jsxs("button", { type: type, disabled: disabled || loading, "aria-busy": loading || undefined, "aria-label": loading ? "Loading..." : props["aria-label"], className: clsx("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", buttonSizeClasses[size], buttonVariantClasses[variant], fullWidth && "w-full", className), ...props, children: [loading && (_jsx(Loader2, { className: "animate-spin text-current", width: loaderSize, height: loaderSize, "aria-hidden": "true" })), iconLeft && !loading && _jsx("span", { className: "mr-1", children: iconLeft }), _jsx("span", { className: clsx(loading && "opacity-70"), children: children }), iconRight && !loading && _jsx("span", { className: "ml-1", children: iconRight })] }));
};
export default Button;

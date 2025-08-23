"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import clsx from "clsx";
const Card = forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: clsx("bg-white rounded-2xl shadow-md p-4", className), ...props, children: children }));
});
Card.displayName = "Card";
export default Card;

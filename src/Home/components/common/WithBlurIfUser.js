"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
// ======================= Component =======================
const WithBlurIfUser = memo(({ isBlurred, children, className }) => {
    // ถ้าไม่ต้องเบลอ, render ธรรมดา
    if (!isBlurred)
        return _jsx(_Fragment, { children: children });
    return (_jsx("div", { className: clsx("blur-sm pointer-events-none select-none transition-all duration-300", className), children: children }));
});
WithBlurIfUser.displayName = "WithBlurIfUser";
export default WithBlurIfUser;

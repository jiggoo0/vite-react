"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
/**
 * 📱 MobileMenu
 *
 * - Drawer เมนูมือถือ
 * - รองรับ backdrop click, Esc key, focus trap เบื้องต้น
 * - ใช้ TailwindCSS + Transition
 */
const MobileMenu = ({ open, onClose }) => {
    const drawerRef = useRef(null);
    // ป้องกัน scroll และปิดเมนูด้วย Esc
    useEffect(() => {
        if (!open)
            return;
        const handleEsc = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);
    // Focus trap เบื้องต้น
    useEffect(() => {
        if (open && drawerRef.current) {
            const firstFocusable = drawerRef.current.querySelector("a, button, input, [tabindex]:not([tabindex='-1'])");
            firstFocusable?.focus();
        }
    }, [open]);
    const menuItems = ["หน้าแรก", "ผลงาน", "บริการ", "เกี่ยวกับเรา"];
    return (_jsxs("div", { className: cn("fixed inset-0 z-50 flex pointer-events-none", open && "pointer-events-auto"), "aria-hidden": !open, children: [_jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300", onClick: onClose }), _jsx("aside", { ref: drawerRef, className: cn("relative ml-auto h-full w-72 bg-base-100 px-6 py-8 shadow-2xl transform transition-transform duration-300", open ? "translate-x-0" : "translate-x-full"), role: "menu", "aria-modal": "true", "aria-label": "\u0E40\u0E21\u0E19\u0E39\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D", children: _jsx("nav", { className: "flex flex-col gap-5 text-lg font-medium", children: menuItems.map((label, idx) => (_jsx("a", { href: `/#${label}`, onClick: onClose, className: "hover:text-primary transition-colors", role: "menuitem", tabIndex: 0, children: label }, idx))) }) })] }));
};
export default MobileMenu;

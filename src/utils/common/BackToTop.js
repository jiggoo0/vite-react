"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
/**
 * ⬆️ BackToTop
 *
 * - แสดงปุ่มกลับไปด้านบนเมื่อ scroll > 300px
 * - Smooth scroll, responsive, dark mode
 * - Debounce scroll 50ms
 * - Animation ด้วย framer-motion
 */
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);
    // ตรวจสอบ scroll position
    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY > 300);
    }, []);
    // ติด listener scroll + debounce
    useEffect(() => {
        const onScroll = () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(handleScroll, 50);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        // ตรวจสอบสถานะตอน mount
        handleScroll();
        return () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            window.removeEventListener("scroll", onScroll);
        };
    }, [handleScroll]);
    // scroll กลับไปด้านบน
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsx("div", { className: "fixed bottom-6 right-6 z-[9999]", children: _jsx(AnimatePresence, { children: isVisible && (_jsx(motion.button, { onClick: scrollToTop, "aria-label": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19", title: "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: "\n              flex items-center justify-center\n              rounded-full p-3\n              bg-primary text-white shadow-lg\n              hover:bg-primary/90 dark:bg-primary-dark\n              focus:outline-none focus:ring-2 focus:ring-primary/50\n              transition-all\n            ", children: _jsx(ArrowUp, { className: "w-5 h-5", "aria-hidden": "true" }) })) }) }));
};
export default BackToTop;

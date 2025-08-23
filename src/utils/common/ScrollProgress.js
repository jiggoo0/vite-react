"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback } from "react";
/**
 * 📊 ScrollProgress
 *
 * - แสดงแถบความคืบหน้าแนวนอนด้านบนเมื่อ scroll หน้าเว็บ
 * - รองรับ smooth transition และ dark mode
 * - ใช้ requestAnimationFrame ลด re-render
 */
const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const ticking = useRef(false);
    /** คำนวณ progress ของ scroll */
    const updateProgress = useCallback(() => {
        if (!ticking.current) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY || window.pageYOffset;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                setProgress(pct);
                ticking.current = false;
            });
            ticking.current = true;
        }
    }, []);
    useEffect(() => {
        // เรียกครั้งแรกตอน mount
        updateProgress();
        // listen scroll + resize
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, [updateProgress]);
    return (_jsx("div", { className: "fixed top-0 left-0 z-[9999] w-full h-1 pointer-events-none bg-transparent", children: _jsx("div", { className: "h-full bg-primary dark:bg-primary-dark transition-all duration-300 ease-out", style: { width: `${progress}%` } }) }));
};
export default ScrollProgress;

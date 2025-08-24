"use client";

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
  const timeoutRef = useRef<number | null>(null);

  // ตรวจสอบ scroll position
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  // ติด listener scroll + debounce
  useEffect(() => {
    const onScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ตรวจสอบสถานะตอน mount
    handleScroll();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  // scroll กลับไปด้านบน
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            aria-label="กลับไปด้านบน"
            title="กลับไปด้านบน"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              flex items-center justify-center
              rounded-full p-3
              bg-primary text-white shadow-lg
              hover:bg-primary/90 dark:bg-primary-dark
              focus:outline-none focus:ring-2 focus:ring-primary/50
              transition-all
            "
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTop;

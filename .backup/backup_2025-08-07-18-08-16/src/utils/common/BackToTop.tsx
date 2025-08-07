"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 🎯 ใช้ useCallback + debounce ให้ Scroll ทำงานน้อยลง
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setIsVisible(y > 300);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 50); // debounce 50ms
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // 🔝 Scroll กลับด้านบน
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9998] transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="กลับไปด้านบน"
        title="กลับไปด้านบน"
        className="flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg transition hover:bg-primary/90 dark:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <ArrowUp className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackToTop;

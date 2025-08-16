'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ⬆️ BackToTop
 *
 * - แสดงปุ่มกลับไปด้านบนเมื่อ scroll มากกว่า 300px
 * - รองรับ smooth scroll และ animation transition
 * - debounce scroll event 50ms
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // ตรวจสอบ scroll position
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  // ติด listener scroll และ debounce
  useEffect(() => {
    const onScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScroll]);

  // ฟังก์ชัน scroll กลับไปด้านบน
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // className แบบ dynamic สำหรับ animation และ visibility
  const buttonClasses = `
    flex items-center justify-center
    rounded-full p-3 text-white shadow-lg
    transition-all duration-300 ease-in-out
    ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-0 pointer-events-none'}
    bg-primary hover:bg-primary/90 dark:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50
  `;

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <button
        onClick={scrollToTop}
        aria-label="กลับไปด้านบน"
        title="กลับไปด้านบน"
        className={buttonClasses}
      >
        <ArrowUp className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackToTop;

import { useEffect, useState, useRef } from "react";

/**
 * 📊 ScrollProgress
 *
 * - แสดงแถบความคืบหน้าแนวนอนด้านบนเมื่อ scroll หน้าเว็บ
 * - ใช้ window.scrollY และ document scrollHeight คำนวณ
 * - ปรับ transition smooth และใช้ Tailwind รองรับ dark mode
 */
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // ค่าเริ่มต้นตอนโหลด

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

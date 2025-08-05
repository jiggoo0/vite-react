// ✅ src/utils/common/ScrollProgress.tsx — แถบแสดงความคืบหน้าการ scroll หน้าเว็บ (Production Ready)

import { useEffect, useState } from "react";

/**
 * 📊 ScrollProgress
 *
 * - แสดงแถบความคืบหน้าแนวนอนด้านบนเมื่อ scroll หน้าเว็บ
 * - ใช้ window.scrollY และ document scrollHeight คำนวณ
 * - ปรับ transition smooth และใช้ Tailwind รองรับ dark mode
 */
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // set ค่าเริ่มต้นทันที

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
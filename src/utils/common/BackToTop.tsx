// ✅ src/utils/common/BackToTop.tsx — Floating Scroll-to-Top Button (Production Ready)

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * ⬆️ BackToTop
 *
 * - ปุ่มย้อนกลับด้านบนของหน้า
 * - แสดงเมื่อ scroll ลงมามากกว่า 300px
 * - รองรับ animation, accessibility, และ responsive
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ✅ ตรวจจับ scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="กลับไปด้านบน"
      className="fixed bottom-6 right-6 z-[9998] rounded-full bg-primary p-3 text-white shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;

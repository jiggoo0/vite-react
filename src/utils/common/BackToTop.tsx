// ✅ src/utils/common/BackToTop.tsx — Floating Scroll-to-Top Button (Production Ready)

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * ⬆️ BackToTop
 *
 * - ปุ่มย้อนกลับด้านบน
 * - แสดงเมื่อ scroll เกิน 300px
 * - มี animation, a11y, และ responsive
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 🎯 ตรวจจับ scroll แล้วตั้งค่า visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔝 Scroll กลับไปด้านบนแบบ smooth
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ❌ ไม่แสดงถ้ายังไม่ scroll
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="กลับไปด้านบน"
      className="fixed bottom-6 right-6 z-[9998] flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
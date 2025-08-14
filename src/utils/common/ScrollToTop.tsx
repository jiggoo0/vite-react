// ✅ src/utils/common/ScrollToTop.tsx — รีเซ็ตตำแหน่ง Scroll เมื่อเปลี่ยนเส้นทาง (SPA Compatible)
"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  /** ถ้า false จะ scroll แบบทันที */
  smooth?: boolean;
}

/**
 * 🔝 ScrollToTop
 *
 * - ใช้ร่วมกับ React Router DOM เพื่อให้ Scroll กลับไปด้านบนทุกครั้งที่เปลี่ยน Route
 * - เหมาะสำหรับ SPA ที่ไม่มีการโหลดหน้าใหม่
 * - ใช้ในระดับ `<App />` หรือ wrapper ของ route ทั้งหมด
 */
const ScrollToTop = ({ smooth = true }: ScrollToTopProps): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  }, [pathname, smooth]);

  return null;
};

export default ScrollToTop;

// ✅ src/utils/common/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  /** ถ้า true จะ scroll แบบ smooth, ถ้า false จะ scroll แบบทันที */
  smooth?: boolean;
  /** offset สำหรับ scroll (เช่น header sticky) */
  offset?: number;
}

/**
 * 🔝 ScrollToTop
 *
 * - รีเซ็ต Scroll กลับไปด้านบนเมื่อ pathname เปลี่ยน
 * - ถ้ามี hash (#) จะไม่ reset → ปล่อยให้ browser scroll ไป anchor เอง
 * - รองรับ smooth scroll และ offset สำหรับ header
 * - ใช้ใน `<App />` หรือ layout wrapper
 */
const ScrollToTop = ({
  smooth = true,
  offset = 0,
}: ScrollToTopProps): null => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ❌ ไม่ scroll ถ้ามี hash (anchor link)
    if (hash) return;

    window.scrollTo({
      top: 0 - offset,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [pathname, hash, smooth, offset]);

  return null;
};

export default ScrollToTop;
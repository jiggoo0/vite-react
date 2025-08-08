// ✅ src/utils/common/ScrollToTop.tsx — รีเซ็ตตำแหน่ง Scroll เมื่อเปลี่ยนเส้นทาง (SPA Compatible)

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 🔝 ScrollToTop
 *
 * - ใช้ร่วมกับ React Router DOM เพื่อให้ Scroll กลับไปด้านบนทุกครั้งที่เปลี่ยน Route
 * - เหมาะสำหรับ SPA ที่ไม่มีการโหลดหน้าใหม่
 * - ใช้ในระดับ `<App />` หรือ wrapper ของ route ทั้งหมด
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

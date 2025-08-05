// ✅ src/utils/common/FallbackLoading.tsx — Overlay Loader แบบเต็มหน้าจอสำหรับช่วงโหลดข้อมูลหรือเปลี่ยนเส้นทาง

import { FC } from "react";

/**
 * 🔄 FallbackLoading
 *
 * - แสดง Loader เต็มหน้าจอแบบ Overlay
 * - เหมาะกับการโหลด initial data, session auth, หรือ routing fallback
 * - รองรับ Tailwind + dark/light mode
 */
const FallbackLoading: FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100 text-base-content transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-base-content/60">กำลังโหลดหน้า...</p>
      </div>
    </div>
  );
};

export default FallbackLoading;
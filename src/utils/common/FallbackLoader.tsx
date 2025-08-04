// ✅ src/utils/common/FallbackLoader.tsx — Minimal Loader สำหรับ Suspense หรือ React.lazy

import { FC } from "react";

/**
 * ⏳ FallbackLoader
 *
 * - ใช้สำหรับ fallback UI ระหว่างโหลด Component (เช่น React.lazy)
 * - ตำแหน่งอยู่กลาง viewport (min-height ครึ่งจอ)
 * - แสดง spinner พร้อมข้อความสถานะ
 */
const FallbackLoader: FC = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-base-content/60">กำลังโหลดข้อมูล...</p>
      </div>
    </div>
  );
};

export default FallbackLoader;

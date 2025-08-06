import { FC } from "react";
import { BadgeCheck } from "lucide-react";

/**
 * 🏷️ HeroBadge — ป้ายพร้อมลุยแบบมืออาชีพ
 *
 * - ใช้ใน Hero Section
 * - สื่อสารความมั่นใจ + ความเชี่ยวชาญ
 * - รองรับ ARIA สำหรับ screen reader
 */
const HeroBadge: FC = () => {
  return (
    <div
      role="status"
      aria-label="พร้อมลุยแบบมืออาชีพ"
      className="
        inline-flex items-center gap-2 rounded-full 
        border border-neutral-800 bg-neutral-900/60 
        px-4 py-1 text-sm text-white shadow backdrop-blur-sm
      "
    >
      <BadgeCheck
        className="w-4 h-4 text-green-500 shrink-0"
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <span className="font-medium tracking-tight whitespace-nowrap">
        พร้อมลุยแบบมืออาชีพ
      </span>
    </div>
  );
};

export default HeroBadge;

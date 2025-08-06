// ✅ src/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 🧠 cn() = clsx() + tailwind-merge()
 * - ใช้รวม className พร้อมจัดลำดับ override style แบบ tailwind
 * - รองรับ conditional class แบบ dynamic
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

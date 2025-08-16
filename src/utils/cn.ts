// ✅ src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 🧠 cn() = clsx() + tailwind-merge()
 *
 * - ใช้รวม className หลายตัว พร้อมจัดลำดับ override style แบบ Tailwind
 * - รองรับ conditional class แบบ dynamic
 * - ช่วยให้เขียน className สะดวกและไม่ซ้ำซ้อน
 *
 * @param inputs - className หลายตัวในรูปแบบ string, array, object
 * @returns string - className รวมกันพร้อม merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

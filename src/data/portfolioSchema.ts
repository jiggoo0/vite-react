import { z } from 'zod';

/**
 * ✅ PortfolioItemSchema
 * - ใช้ validate พอร์ตโฟลิโอแต่ละรายการ
 * - `image` เป็น path ภายใน ไม่ต้องตรวจสอบ URL format
 */
export const PortfolioItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(['Website', 'Dashboard', 'Landing Page', 'Mobile App', 'Graphic']),
  image: z.string().min(1, { message: 'Image path is required' }),
  description: z.string().optional(),
  link: z.string().url().optional(),
});

/**
 * ✅ PortfolioItemsSchema
 * - สำหรับ validate อาเรย์ข้อมูลทั้งหมดใน portfolioItems.ts
 */
export const PortfolioItemsSchema = z.array(PortfolioItemSchema);

import { Variants, easeInOut } from 'framer-motion';

interface MotionConfig {
  duration?: number;
  delay?: number;
  distance?: number;
}

/**
 * 📦 Container Motion Variants
 * ใช้ห่อ container หลัก เพื่อให้ children animate แบบ stagger
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

/**
 * 🔼 Fade In Up Motion Variants (พร้อม config)
 * ใช้กับ element เดี่ยวหรือหลายตัว
 */
export const fadeInUp = (
  index: number = 0,
  { duration = 0.3, delay = 0.1, distance = 20 }: MotionConfig = {},
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easeInOut,
      delay: index * delay,
    },
  },
});

/**
 * 🎯 Generate Fade In Up Variants สำหรับหลาย element
 * @param count จำนวน element
 * @param config ปรับแต่ง animation
 */
export const generateFadeInUpVariants = (count: number, config?: MotionConfig): Variants[] =>
  Array.from({ length: count }, (_, i) => fadeInUp(i, config));

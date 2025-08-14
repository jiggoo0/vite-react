import { Variants, easeInOut } from "framer-motion";

/**
 * 📦 Container Motion Variants
 * ใช้สำหรับห่อ container หลัก เพื่อให้ children animation stagger
 */
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1, // children จะเริ่ม animate ทีละ 0.1s
      duration: 0.5, // ความยาว animation ของ container
      ease: easeInOut, // easing แบบ smooth
    },
  },
};

/**
 * 🔼 Fade In Up Motion Variants
 * ใช้สำหรับ element แต่ละตัว ให้ fade in + เลื่อนขึ้น
 * รองรับการส่ง index เพื่อ delay stagger
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // ความยาว animation ของ element
      ease: easeInOut, // easing แบบ smooth
      delay: i * 0.1, // stagger effect
    },
  }),
};

/**
 * 🎯 Helper function สำหรับสร้าง Variants แบบ fadeInUp
 * สำหรับหลาย element พร้อม delay อัตโนมัติ
 * @param count จำนวน element
 * @returns Array ของ Variants
 */
export const generateFadeInUpVariants = (count: number): Variants[] => {
  return Array.from({ length: count }, (_, i) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        delay: i * 0.1,
      },
    },
  }));
};

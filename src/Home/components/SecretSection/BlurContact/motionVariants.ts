import { Variants, easeInOut } from "framer-motion";

/**
 * 📦 Container Motion Variants
 * ใช้สำหรับ Motion Container หลัก
 * กำหนดค่า hidden/visible พร้อม staggerChildren
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
 * ใช้สำหรับ Element เดี่ยว ๆ เช่น Input, Button, Text
 * สามารถส่งค่า i (ลำดับ) เพื่อ delay animation
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
      delay: i * 0.1, // stagger effect ตามลำดับ
    },
  }),
};

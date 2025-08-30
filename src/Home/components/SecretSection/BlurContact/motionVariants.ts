import { Variants, easeInOut } from "framer-motion";

/**
 * 📦 Container Motion Variants
 * ใช้สำหรับ Motion Container หลัก
 * - hidden: ซ่อน container
 * - visible: แสดง container พร้อม stagger children
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12, // children จะเริ่ม animate ทีละ 0.12s
      duration: 0.5, // ความยาว animation ของ container
      ease: easeInOut, // easing แบบ smooth
    },
  },
};

/**
 * 🔼 Fade In Up Motion Variants
 * ใช้สำหรับ element เดี่ยว ๆ เช่น Input, Button, Text
 * @param i ลำดับของ element สำหรับ stagger delay
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35, // ปรับให้ slightly smoother
      ease: easeInOut,
      delay: i * 0.12, // stagger effect ตามลำดับ
    },
  }),
};

/**
 * ✅ Usage Example:
 * <motion.div variants={containerVariants} initial="hidden" animate="visible">
 *   <motion.p custom={0} variants={fadeInUp}>Text 1</motion.p>
 *   <motion.p custom={1} variants={fadeInUp}>Text 2</motion.p>
 * </motion.div>
 */

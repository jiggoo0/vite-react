// src/Home/components/UserBoard/motionConfig.ts
import { Variants } from "framer-motion";

/**
 * 📦 fadeUpContainer
 * -------------------------
 * Parent container animation
 * ✅ ใช้ staggerChildren ให้ child element animate ไล่ตามลำดับ
 */
export const fadeUpContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // ระยะ delay ระหว่าง item (default: 0.1)
      when: "beforeChildren",
    },
  },
};

/**
 * 🎯 fadeUpItem
 * -------------------------
 * Child item animation
 * ✅ Fade-in + Slide-up
 */
export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easeOut
    },
  },
};
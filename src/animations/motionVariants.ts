// src/animations/motionVariants.ts
import { Variants } from "framer-motion";

/**
 * Motion Variants สำหรับ Carousel (TestimonialSlider)
 * @param direction - จำนวนบวก/ลบ กำหนดทิศทาง slide
 */
export const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

/**
 * Motion Variants สำหรับ FadeIn + Slide Up
 * สามารถใช้กับ component อื่น เช่น Sections, Cards, Hero
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Motion Variants สำหรับ FadeIn แบบ delay กำหนดได้
 */
export const fadeInUpWithDelay = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

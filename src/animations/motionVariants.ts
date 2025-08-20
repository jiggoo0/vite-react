// src/animations/motionVariants.ts
import type { Variants } from "framer-motion";

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
 * ใช้ได้กับ Sections, Cards, Hero ฯลฯ
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
 * Motion Variants สำหรับ FadeIn + Slide Up แบบกำหนด delay
 * @param delay - เวลา delay ก่อนเริ่ม animation (วินาที)
 */
export const fadeInUpWithDelay = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

// src/animations/motionVariants.ts
import { Variants } from "framer-motion";

// ✅ สำหรับ Carousel (TestimonialSlider)
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

// ✅ เผื่อไว้ใช้ที่อื่น เช่น FadeIn
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

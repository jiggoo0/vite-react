// src/animations/motionVariants.ts
import type { Variants, Transition } from "framer-motion";

/** =======================
 * Default transition settings
 * ======================= */
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

/** =======================
 * Carousel animation variants
 * @param direction - positive = next, negative = previous
 * ======================= */
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
    transition: defaultTransition,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    transition: defaultTransition,
  }),
};

/** =======================
 * Fade in & slide up animation
 * ======================= */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** =======================
 * Fade in & slide up with delay
 * @param delay - seconds to delay animation
 * ======================= */
export const fadeInUpWithDelay = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, delay },
  },
});

/** =======================
 * Subtle fade animation
 * ======================= */
export const subtleFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...defaultTransition, duration: 0.5 } },
};

/** =======================
 * Hero section specific variants
 * - container for staggering children
 * - individual items
 * ======================= */
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

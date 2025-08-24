import type { Variants, Transition } from "framer-motion";

const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

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

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeInUpWithDelay = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ...defaultTransition, delay } },
});

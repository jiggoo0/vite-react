import { Variants, easeInOut } from "framer-motion";

/** 📦 Container Motion Variants */
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

/** 🔼 Fade In Up Motion Variants */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
      delay: i * 0.1,
    },
  }),
};

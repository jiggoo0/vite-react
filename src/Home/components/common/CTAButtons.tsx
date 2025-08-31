// src/Home/components/common/CTAButtons.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

/** =======================
 * Motion-enhanced Link
 * ======================= */
const MotionLink = motion(
  forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>((props, ref) => (
    <Link ref={ref} {...props} />
  ))
);

/** =======================
 * Motion Variants
 * ======================= */
const buttonVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

/** =======================
 * Hero Call-to-Action Buttons
 * ======================= */
const CTAButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4"
      role="group"
      aria-label="Hero CTA Buttons"
    >
      {/* Portfolio Button */}
      <motion.a
        href="#portfolio"
        className="flex items-center justify-center gap-2 btn px-6 py-3 text-sm font-semibold rounded-xl border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ดูผลงาน
        <ArrowRightIcon className="w-4 h-4 text-white" />
      </motion.a>

      {/* Free Assessment Button */}
      <MotionLink
        to="/form"
        className="flex items-center justify-center gap-2 btn px-6 py-3 text-sm font-semibold rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/40"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        aria-label="Free Assessment Button"
      >
        ประเมินเบื้องต้นฟรี
        <ArrowRightIcon className="w-4 h-4 text-green-400 group-hover:text-white transition" />
      </MotionLink>
    </motion.div>
  );
};

export default CTAButtons;

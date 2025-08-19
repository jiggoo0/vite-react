"use client";

import { FC, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { testimonials } from "@data/testimonialsData";
import { carouselVariants } from "@/animations/motionVariants";

// =======================
// Constants
// =======================
const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const AUTO_PLAY_INTERVAL = 7000;

// =======================
// Helper
// =======================
const swipePower = (offset: number, velocity: number) => offset * velocity;

// =======================
// Component
// =======================
const TestimonialSlider: FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialIndex = useMemo(
    () =>
      ((page % testimonials.length) + testimonials.length) %
      testimonials.length,
    [page]
  );

  const paginate = useCallback((newDirection: number) => {
    setPage(([currentPage]) => [currentPage + newDirection, newDirection]);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL);
  }, [paginate]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  const { content, name, role, id } = testimonials[testimonialIndex];

  return (
    <div
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl"
      onMouseEnter={() =>
        intervalRef.current && clearInterval(intervalRef.current)
      }
      onMouseLeave={resetInterval}
      onFocus={() => intervalRef.current && clearInterval(intervalRef.current)}
      onBlur={resetInterval}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer Testimonials"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${id}-${page}`}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(
            _event: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo
          ) => {
            const swipe = swipePower(info.offset.x, info.velocity.x);
            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) paginate(1);
            else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) paginate(-1);
          }}
          className="cursor-grab select-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-gray-900 dark:text-gray-100 text-xl leading-relaxed mb-8 font-serif">
            “{content}”
          </p>

          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg select-none">
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {name}
              </p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                {role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;

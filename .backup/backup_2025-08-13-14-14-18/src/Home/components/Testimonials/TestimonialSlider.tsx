import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@data/testimonialsData";

const variants = {
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export const TestimonialSlider: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = useCallback((newDirection: number) => {
    setPage(([currentPage]) => [currentPage + newDirection, newDirection]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 7000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={testimonials[testimonialIndex].id}
          custom={direction}
          variants={variants}
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
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
          className="cursor-grab select-none"
          aria-live="polite"
          aria-atomic="true"
          role="group"
          aria-roledescription="carousel"
          aria-label="เสียงตอบรับจากลูกค้า"
        >
          <p className="text-gray-900 dark:text-gray-100 text-xl leading-relaxed mb-8 font-serif">
            “{testimonials[testimonialIndex].content}”
          </p>
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg select-none">
              {testimonials[testimonialIndex].name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {testimonials[testimonialIndex].name}
              </p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                {testimonials[testimonialIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        aria-label="Previous testimonial"
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-indigo-100 dark:bg-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-700 p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600 dark:text-indigo-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        aria-label="Next testimonial"
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-indigo-100 dark:bg-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-700 p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600 dark:text-indigo-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@data/testimonialsData";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const AUTO_PLAY_INTERVAL = 7000;

const swipePower = (offset: number, velocity: number) => offset * velocity;

const TestimonialSlider: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const intervalRef = useRef<NodeJS.Timeout>();

  const testimonialIndex = useMemo(
    () =>
      ((page % testimonials.length) + testimonials.length) %
      testimonials.length,
    [page]
  );

  const paginate = useCallback((newDirection: number) => {
    setPage(([currentPage]) => [currentPage + newDirection, newDirection]);
  }, []);

  // Auto-play with pause on hover/focus
  useEffect(() => {
    const start = () => {
      intervalRef.current = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    start();
    return () => stop(); // ✅ return function only
  }, [paginate]);

  const { content, name, role, id } = testimonials[testimonialIndex];

  return (
    <div
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl"
      onMouseEnter={() =>
        intervalRef.current && clearInterval(intervalRef.current)
      }
      onMouseLeave={() => {
        intervalRef.current = setInterval(
          () => paginate(1),
          AUTO_PLAY_INTERVAL
        );
      }}
      onFocus={() => intervalRef.current && clearInterval(intervalRef.current)}
      onBlur={() => {
        intervalRef.current = setInterval(
          () => paginate(1),
          AUTO_PLAY_INTERVAL
        );
      }}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={id}
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
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) paginate(1);
            else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) paginate(-1);
          }}
          className="cursor-grab select-none"
          aria-live="polite"
          aria-atomic="true"
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer Testimonials"
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

      {/* Navigation */}
      {["left", "right"].map((dir) => {
        const isLeft = dir === "left";
        return (
          <button
            key={dir}
            aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
            onClick={() => paginate(isLeft ? -1 : 1)}
            className={`absolute top-1/2 ${
              isLeft ? "left-4" : "right-4"
            } -translate-y-1/2 rounded-full bg-indigo-100 dark:bg-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-700 p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
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
              <path d={isLeft ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
            </svg>
          </button>
        );
      })}

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage([idx, idx > testimonialIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === testimonialIndex
                ? "bg-indigo-600 dark:bg-indigo-400"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
            aria-current={idx === testimonialIndex ? "true" : undefined}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-2 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          key={testimonialIndex}
          className="h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;

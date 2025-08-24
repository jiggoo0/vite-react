"use client";

import { FC, useState, useMemo, ReactNode } from "react";
import { testimonials } from "@data/testimonialsData";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { carouselVariants } from "@/animations/motionVariants";
import { cn } from "@/utils/cn";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

const MotionTestimonialItem: FC<{
  testimonial: Testimonial;
  index: number;
  prev: () => void;
  next: () => void;
}> = ({ testimonial, index, prev, next }) => (
  <motion.div
    key={index}
    variants={carouselVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.5 }}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.2}
    onDragEnd={(e, { offset, velocity }) => {
      if (offset.x < -50 || velocity.x < -500) next();
      if (offset.x > 50 || velocity.x > 500) prev();
    }}
    className="absolute inset-0 flex flex-col justify-center px-4"
  >
    <p className="text-base leading-relaxed mb-6">“{testimonial.content}”</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 bg-gray-100 text-gray-800 text-lg font-bold rounded-full">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-sm text-gray-900">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-600">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSlider: FC = () => {
  const [index, setIndex] = useState(0);

  const testimonial = useMemo(
    () => testimonials[index % testimonials.length],
    [index]
  );

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="w-full max-w-2xl mx-auto border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow relative overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <MotionTestimonialItem
          testimonial={testimonial}
          index={index}
          prev={prev}
          next={next}
        />
      </AnimatePresence>

      <div className="flex justify-end mt-6 gap-2 relative z-10">
        <button
          type="button"
          onClick={prev}
          className={cn(
            "px-3 py-1 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 rounded"
          )}
          aria-label="Previous testimonial"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={next}
          className={cn(
            "px-3 py-1 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 rounded"
          )}
          aria-label="Next testimonial"
        >
          Next
        </button>
      </div>
    </section>
  );
};

TestimonialSlider.displayName = "TestimonialSlider";

export default TestimonialSlider;

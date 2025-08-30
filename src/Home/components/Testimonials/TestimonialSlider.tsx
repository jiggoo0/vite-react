"use client";

import { FC, useState, useMemo } from "react";
import { testimonials } from "@data/testimonialsData";
import { motion, AnimatePresence } from "framer-motion";
import { carouselVariants } from "@/animations/motionVariants";
import { cn } from "@/utils/cn";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface MotionTestimonialItemProps {
  testimonial: Testimonial;
  index: number;
  prev: () => void;
  next: () => void;
  direction: number; // +1 = next, -1 = prev
}

const MotionTestimonialItem: FC<MotionTestimonialItemProps> = ({
  testimonial,
  index,
  prev,
  next,
  direction,
}) => (
  <motion.div
    key={index}
    variants={carouselVariants}
    custom={direction} // ส่ง direction ให้ variants function
    initial="enter"
    animate="center"
    exit="exit"
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
        <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
        <p className="text-xs text-gray-600">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSlider: FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // +1 next, -1 prev

  const testimonial = useMemo(() => testimonials[index % testimonials.length], [index]);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className="w-full max-w-2xl mx-auto border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <MotionTestimonialItem
          testimonial={testimonial}
          index={index}
          prev={prev}
          next={next}
          direction={direction}
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

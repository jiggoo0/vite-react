"use client";

import { FC, useState, useMemo } from "react";
import { testimonials } from "@data/testimonialsData";
import { cn } from "@/utils/cn";

const TestimonialSlider: FC = () => {
  const [index, setIndex] = useState(0);

  const testimonial = useMemo(() => testimonials[index % testimonials.length], [index]);

  const handlePrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div
      className="w-full max-w-2xl mx-auto border border-gray-300 bg-white text-gray-900 p-6 rounded-xl shadow-md"
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Testimonial Content */}
      <p className="text-base leading-relaxed mb-6">“{testimonial.content}”</p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-400 bg-gray-100 text-gray-800 text-lg font-bold rounded-full">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end mt-4 gap-2">
        <button
          type="button"
          onClick={handlePrev}
          className={cn(
            "px-3 py-1 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-100 transition"
          )}
          aria-label="Previous testimonial"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          className={cn(
            "px-3 py-1 border border-gray-300 text-sm text-gray-700 rounded hover:bg-gray-100 transition"
          )}
          aria-label="Next testimonial"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;

"use client";

import { FC, useState, useMemo } from "react";
import { testimonials } from "@data/testimonialsData";
import { cn } from "@/utils/cn";

const TestimonialSlider: FC = () => {
  const [index, setIndex] = useState(0);

  const testimonial = useMemo(
    () => testimonials[index % testimonials.length],
    [index]
  );

  return (
    <div
      className="w-full max-w-2xl mx-auto border border-gray-300 bg-white text-gray-900 p-6"
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Content */}
      <p className="text-base leading-relaxed mb-6">
        “{testimonial.content}”
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-400 bg-gray-100 text-gray-800 text-lg font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-600">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end mt-4 gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className={cn(
            "px-2 py-1 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
          )}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className={cn(
            "px-2 py-1 border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
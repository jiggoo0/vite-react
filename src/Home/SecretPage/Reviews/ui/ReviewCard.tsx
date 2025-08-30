"use client";

import { FC, memo } from "react";

export interface ReviewCardProps {
  id?: string | number;
  name: string;
  image: string;
  comment: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ id, name, image, comment }) => (
  <article
    key={id}
    className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center animate-fadeInUp transition-transform duration-300 hover:scale-[1.02]"
    aria-label={`รีวิวจาก ${name}`}
  >
    <img
      src={image}
      alt={`Avatar ของ ${name}`}
      className="w-24 h-24 object-cover rounded-full border mb-4"
      loading="lazy"
      draggable={false}
    />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">{comment}</p>
  </article>
);

ReviewCard.displayName = "ReviewCard";
export default memo(ReviewCard);

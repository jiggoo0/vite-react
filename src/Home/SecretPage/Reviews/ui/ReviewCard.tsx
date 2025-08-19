// src/Home/SecretPage/Reviews/ui/ReviewCard.tsx
"use client";

import { FC, memo } from "react";

export interface ReviewCardProps {
  id?: number;
  name: string;
  image: string;
  comment: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ name, image, comment }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center animate-fadeInUp">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 object-cover rounded-full border mb-4"
      loading="lazy"
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600 mt-2">{comment}</p>
  </div>
);

export default memo(ReviewCard);

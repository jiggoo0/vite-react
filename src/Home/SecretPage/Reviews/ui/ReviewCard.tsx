// src/Home/SecretPage/Reviews/ui/ReviewCard.tsx
import React from "react";

interface ReviewCardProps {
  name: string;
  image: string;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, comment }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full border mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">{comment}</p>
    </div>
  );
};

export default ReviewCard;
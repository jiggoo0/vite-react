// src/Home/SecretPage/Reviews/ReviewsGallery.tsx
import React from "react";
import ReviewCard from "./ui/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "คุณสมชาย",
    image: "/images/reviews/review1.webp",
    comment: "บริการดีเยี่ยม ประทับใจมาก",
  },
  {
    id: 2,
    name: "คุณศิริพร",
    image: "/images/reviews/review2.webp",
    comment: "ใช้งานง่าย ทีมงานให้คำแนะนำดีมาก",
  },
  {
    id: 3,
    name: "คุณธนพล",
    image: "/images/reviews/review3.webp",
    comment: "รวดเร็วและปลอดภัย แนะนำเลยครับ",
  },
];

const ReviewsGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewsGallery;
"use client";

import { FC, memo } from "react";
import { motion, Variants } from "framer-motion";

export interface Review {
  id: string;
  reviewerName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  avatarUrl?: string;
}

interface ReviewsGalleryProps {
  reviews: Review[];
}

// Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ReviewsGallery: FC<ReviewsGalleryProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-gray-500">ไม่มีรีวิวในขณะนี้</p>;
  }

  return (
    <motion.section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Gallery รีวิว"
    >
      {reviews.map((review, idx) => (
        <motion.div
          key={review.id}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          custom={idx}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={review.avatarUrl || "/images/default-avatar.png"}
              alt={`${review.reviewerName} avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{review.reviewerName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(review.date).toLocaleDateString("th-TH", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 ${i < review.rating ? "opacity-100" : "opacity-30"}`}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{review.comment}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

ReviewsGallery.displayName = "ReviewsGallery";
export default memo(ReviewsGallery);

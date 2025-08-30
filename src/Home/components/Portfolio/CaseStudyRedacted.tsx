"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export type CaseItem = {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  tags?: string[];
  redactedFields?: string[]; // ["client", "brand", ...]
};

export interface CaseStudyRedactedProps {
  className?: string;
  items: CaseItem[];
  headline?: string;
  subline?: string;
}

// Animation variants
const variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

// REDACTED label component
const Redact: FC<{ label?: string }> = ({ label = "REDACTED" }) => (
  <span className="bg-black text-black px-1 rounded-sm select-none">{label}</span>
);

const CaseStudyRedacted: FC<CaseStudyRedactedProps> = ({
  className,
  items,
  headline = "ตัวอย่างผลงานของเรา",
  subline = "บางข้อมูลถูกซ่อนเพื่อความเป็นส่วนตัวและปลอดภัย",
}) => {
  return (
    <section className={clsx("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
          <p className="opacity-80 mt-2">{subline}</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              variants={variants}
              className="bg-base-200 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <figure className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-white text-xs">
                  REDACTED
                </div>
              </figure>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  {item.title}
                  {item.redactedFields?.includes("client") && <Redact />}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 opacity-90 mb-3">
                  {item.summary}{" "}
                  {item.redactedFields?.includes("brand") && <Redact label="BRAND" />}
                </p>

                {/* Tags */}
                {item.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

CaseStudyRedacted.displayName = "CaseStudyRedacted";

export default CaseStudyRedacted;

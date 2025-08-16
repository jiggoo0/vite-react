"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Case = {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  tags?: string[];
  redactedFields?: string[]; // ["client", "brand", ...]
};

export interface CaseStudyRedactedProps {
  className?: string;
  items: Case[];
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
  <span className="bg-black text-black px-1 rounded-sm select-none">
    {label}
  </span>
);

const CaseStudyRedacted: FC<CaseStudyRedactedProps> = ({
  className,
  items,
  headline = "Case Study (REDACTED)",
  subline = "ข้อมูลบางส่วนถูกปกปิดเพื่อความเป็นส่วนตัว",
}) => {
  return (
    <section className={clsx("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
          <p className="opacity-80 mt-2">{subline}</p>
        </div>

        {/* Grid of case studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              variants={variants}
              className="card bg-base-200 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <figure className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Overlay warning */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-white text-xs">
                  REDACTED
                </div>
              </figure>

              {/* Body */}
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {item.title}{" "}
                  {item.redactedFields?.includes("client") && <Redact />}
                </h3>
                <p className="opacity-80">
                  {item.summary}{" "}
                  {item.redactedFields?.includes("brand") && (
                    <Redact label="BRAND" />
                  )}
                </p>

                {/* Tags */}
                {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline">
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

export default CaseStudyRedacted;

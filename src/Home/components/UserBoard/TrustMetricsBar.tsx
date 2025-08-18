"use client";

import { FC } from "react";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

export type Metric = {
  key: string;
  label: string;
  value: string; // เช่น "99.7%" | "8+ ปี"
};

export interface TrustMetricsBarProps {
  className?: string;
  metrics?: Metric[];
}

const defaultMetrics: Metric[] = [
  { key: "exp", label: "ประสบการณ์", value: "8+ ปี" },
  { key: "satisfaction", label: "ความพึงพอใจ", value: "98–99%" },
  { key: "sla", label: "ส่งทันนัด", value: "99%+" },
  { key: "privacy", label: "ความลับ", value: "กฎข้อแรก" },
];

// Motion variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TrustMetricsBar: FC<TrustMetricsBarProps> = ({ className, metrics }) => {
  const data = metrics && metrics.length > 0 ? metrics : defaultMetrics;

  return (
    <section
      className={clsx("py-6 md:py-8", className)}
      aria-label="ตัวชี้วัดความเชื่อมั่น"
    >
      <div className="container mx-auto px-4">
        <motion.dl
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((m) => (
            <motion.div
              key={m.key}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              tabIndex={0}
              className="stat bg-base-200 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary"
              role="group"
              aria-label={`${m.label}: ${m.value}`}
            >
              <dt className="stat-title text-sm md:text-base opacity-80">
                {m.label}
              </dt>
              <dd className="stat-value mt-2 text-lg md:text-2xl font-semibold">
                {m.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default TrustMetricsBar;

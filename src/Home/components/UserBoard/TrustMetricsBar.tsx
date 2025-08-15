import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

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

// Motion Config
const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay },
});

const TrustMetricsBar: FC<TrustMetricsBarProps> = ({ className, metrics }) => {
  const data = metrics?.length ? metrics : defaultMetrics;

  return (
    <section
      className={clsx("py-6 md:py-8", className)}
      aria-label="ตัวชี้วัดความเชื่อมั่น"
    >
      <div className="container mx-auto px-4">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {data.map((m, idx) => (
            <motion.div
              key={m.key}
              {...fadeInUp(idx * 0.05)}
              className="stat bg-base-200 rounded-box"
              role="group"
              aria-label={`${m.label}: ${m.value}`}
            >
              <dt className="stat-title">{m.label}</dt>
              <dd className="stat-value text-xl md:text-3xl">{m.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default TrustMetricsBar;

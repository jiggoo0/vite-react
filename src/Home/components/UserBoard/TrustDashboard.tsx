// src/Home/components/UserBoard/TrustDashboard.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

import { IMetric, IBadge, IStat } from "./types";
import { fadeUpContainer } from "./motionConfig";

import TrustBadge from "./TrustBadge";
import MetricCard from "./MetricCard";
import BadgeCard from "./BadgeCard";

interface TrustDashboardProps {
  /** 📊 Metrics ข้อมูลสรุป */
  metrics?: IMetric[];
  /** 🛡️ Badges แสดงความน่าเชื่อถือ */
  badges?: IBadge[];
  /** 🔹 Stats จำนวนสถิติ */
  stats?: IStat[];
  /** ✨ className เพิ่มเติม */
  className?: string;
}

/** Default Data */
const defaultMetrics: IMetric[] = [
  { key: "exp", label: "ประสบการณ์", value: "8+ ปี" },
  { key: "satisfaction", label: "ความพึงพอใจ", value: "98–99%" },
  { key: "sla", label: "ส่งทันนัด", value: "99%+" },
  { key: "privacy", label: "ความลับ", value: "กฎข้อแรก" },
];

const defaultBadges: IBadge[] = [
  { id: 1, icon: <></>, title: "Verified Security", description: "ข้อมูลปลอดภัยและเชื่อถือได้" },
  { id: 2, icon: <></>, title: "Certified Service", description: "ได้รับการรับรองมาตรฐานคุณภาพ" },
  { id: 3, icon: <></>, title: "Premium Experience", description: "ประสบการณ์ใช้งานราบรื่นและมั่นใจ" },
];

const defaultStats: IStat[] = [
  { key: "customers", label: "ลูกค้ามั่นใจในเรา", count: 1200 },
  { key: "projects", label: "โปรเจกต์สำเร็จ", count: 350 },
  { key: "partners", label: "พันธมิตร", count: 25 },
];

const TrustDashboard: FC<TrustDashboardProps> = ({
  metrics,
  badges,
  stats,
  className,
}) => {
  const metricsData = metrics?.length ? metrics : defaultMetrics;
  const badgesData = badges?.length ? badges : defaultBadges;
  const statsData = stats?.length ? stats : defaultStats;

  return (
    <section
      className={cn("space-y-12 py-10 px-4", className)}
      aria-label="Trust Dashboard"
    >
      {/* Stats */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {statsData.map((s) => (
          <TrustBadge key={s.key} count={s.count} label={s.label} />
        ))}
      </motion.div>

      {/* Metrics */}
      <motion.dl
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {metricsData.map((m) => (
          <MetricCard key={m.key} metric={m} />
        ))}
      </motion.dl>

      {/* Badges */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {badgesData.map((b) => (
          <BadgeCard key={b.id} badge={b} />
        ))}
      </motion.div>
    </section>
  );
};

export default TrustDashboard;
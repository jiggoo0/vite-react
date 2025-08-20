"use client";

import { FC } from "react";
import MetricCard from "./MetricCard";
import TrustBadge from "./TrustBadge";

export type Metric = {
  key: string;
  label: string;
  value: string;
};

export type Stat = {
  key: string;
  label: string;
  count: number;
};

export type Badge = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface TrustDashboardProps {
  metrics: Metric[];
  stats: Stat[];
  badges: Badge[];
}

/**
 * TrustDashboard
 * -------------------------
 * แสดงข้อมูลความน่าเชื่อถือของบริษัท:
 * - Metrics: ข้อมูล KPI ของทีม
 * - Stats: ข้อมูลตัวเลขสำคัญ
 * - Badges: แสดงความน่าเชื่อถือและมาตรฐาน
 * - Responsive, professional, accessible
 */
const TrustDashboard: FC<TrustDashboardProps> = ({ metrics, stats, badges }) => {
  return (
    <section
      aria-labelledby="trust-dashboard-title"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-8 space-y-10"
    >
      {/* Section Title */}
      <h2
        id="trust-dashboard-title"
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6"
      >
        🛡️ Trust & Performance Dashboard
      </h2>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.key} label={metric.label} value={metric.value} />
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.key}
            className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg text-center"
          >
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-light mt-1">
              {stat.count}
            </p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {badges.map((badge) => (
          <TrustBadge
            key={badge.id}
            icon={badge.icon}
            title={badge.title}
            description={badge.description}
          />
        ))}
      </div>
    </section>
  );
};

TrustDashboard.displayName = "TrustDashboard";

export default TrustDashboard;
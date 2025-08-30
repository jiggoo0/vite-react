// src/Home/components/SecretSection/KbankIOSNotification.tsx
"use client";

import { FC, useEffect, useState } from "react";
import {
  KbankIOSNotification as NotificationType,
  kbankMockData,
} from "@__mocks__/KbankIOSNotification.mock";
import KbankNotificationCard from "./KbankNotificationCard";

const LOAD_DELAY_MS = 700;

// ==============================
// Skeleton Loader Component
// ==============================
const SkeletonLoader: FC = () => (
  <section
    className="space-y-4 max-w-md mx-auto animate-pulse"
    aria-label="Loading KBank notifications"
    role="status"
    aria-live="polite"
  >
    {[...Array(3)].map((_, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-4 shadow space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gray-200 rounded-sm" />
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="flex-1 space-y-1">
            <div className="h-3 w-2/3 bg-gray-200 rounded" />
            <div className="h-2 w-1/3 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="flex justify-between mt-2">
          <div className="h-2 w-1/4 bg-gray-200 rounded" />
          <div className="h-2 w-1/4 bg-gray-200 rounded" />
        </div>
      </div>
    ))}
  </section>
);

// ==============================
// Empty State Component
// ==============================
const EmptyState: FC = () => (
  <section
    className="min-h-[120px] flex items-center justify-center bg-base-100 rounded-3xl shadow-md p-6 border border-gray-200"
    aria-live="polite"
    aria-label="No notifications"
  >
    <p className="text-gray-500 select-none">ไม่มีการแจ้งเตือนในขณะนี้</p>
  </section>
);

// ==============================
// Main Component
// ==============================
const KbankIOSNotification: FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(kbankMockData);
      setLoading(false);
    }, LOAD_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;
  if (notifications.length === 0) return <EmptyState />;

  return (
    <section
      className="space-y-4 max-w-md mx-auto"
      role="list"
      aria-label={`รายการแจ้งเตือนธุรกรรมทั้งหมด ${notifications.length} รายการ`}
    >
      {notifications.map((item) => (
        <KbankNotificationCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default KbankIOSNotification;

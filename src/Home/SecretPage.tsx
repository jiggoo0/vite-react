"use client";

import { FC, ReactNode } from "react";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import LazyA4Card from "@home/components/common/LazyA4Card";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

/**
 * SecretPage
 * --------------------
 * - แสดงชุดการ์ดแบบ lazy load
 * - แยก Section ตาม role ของผู้ใช้งาน
 * - Responsive, professional, readable
 */
const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
        <span className="text-lg font-medium animate-pulse">Loading...</span>
      </div>
    );
  }

  // User not authenticated
  if (!user) return null;

  // กำหนด effectiveRole สำหรับ user
  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(user.role)
    ? (user.role as EffectiveRole)
    : "user";

  // สร้างชุดการ์ดทั้งหมดตาม role
  const lazyCards = getLazyCards(user, effectiveRole);

  // แบ่ง sections ของการ์ดเพื่อให้อ่านง่าย
  const sections: { cards: typeof lazyCards; title?: string }[] = [
    { cards: lazyCards.slice(0, 3), title: "Header Section" },
    { cards: lazyCards.slice(3, 4), title: "Registration Section" },
    { cards: lazyCards.slice(4, 5), title: "Salary Certificate" },
    { cards: lazyCards.slice(5, 6), title: "Medical Certificate" },
    { cards: lazyCards.slice(6, 7), title: "ID Card" },
    { cards: lazyCards.slice(7, 8), title: "Kbank Notifications" },
    { cards: lazyCards.slice(8, 9), title: "Special Branch" },
    { cards: lazyCards.slice(9), title: "Footer / Actions" },
  ];

  return (
    <main className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 lg:px-8 py-8">
      <div className="container max-w-6xl mx-auto flex flex-col gap-12">
        {sections.map(({ cards }, sectionIdx) =>
          cards.map(({ component, delay, isBlurred, fallback }, idx) => (
            <LazyA4Card
              key={`${sectionIdx}-${idx}`}
              delay={delay}
              isBlurred={isBlurred}
              fallback={fallback as ReactNode}
            >
              {component}
            </LazyA4Card>
          ))
        )}
      </div>
    </main>
  );
};

SecretPage.displayName = "SecretPage";

export default SecretPage;
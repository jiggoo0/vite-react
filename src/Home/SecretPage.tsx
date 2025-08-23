"use client";

import { FC, ReactNode } from "react";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import LazyA4Card from "@home/components/common/LazyA4Card";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

interface LazyCard {
  component: ReactNode;
  delay?: number;
  isBlurred?: boolean;
  fallback?: ReactNode;
}

/**
 * SecretPage
 * --------------------
 * - แสดงชุดการ์ดแบบ lazy load
 * - แยก Section ตาม role ของผู้ใช้งาน
 * - Flat, professional, readable
 */
const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(user.role)
    ? (user.role as EffectiveRole)
    : "user";

  const lazyCards: LazyCard[] = getLazyCards(user, effectiveRole);

  const sections: { cards: LazyCard[]; title?: string }[] = [
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
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8">
      <div className="container max-w-6xl mx-auto flex flex-col gap-12">
        {sections.map(({ cards, title }, sectionIdx) => (
          <section key={sectionIdx} className="flex flex-col gap-6">
            {title && <h2 className="text-base font-semibold border-b border-gray-300">{title}</h2>}
            {cards.map(({ component, delay, isBlurred, fallback }, idx) => (
              <LazyA4Card
                key={`${sectionIdx}-${idx}`}
                delay={delay}
                isBlurred={isBlurred}
                fallback={fallback}
              >
                {component}
              </LazyA4Card>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

SecretPage.displayName = "SecretPage";

export default SecretPage;
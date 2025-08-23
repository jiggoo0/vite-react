"use client";

import { FC } from "react";
import { useProtectedAuth } from "../hooks/useProtectedAuth";
import LazyA4Card from "./components/common/LazyA4Card";
import PageSection from "./components/common/PageSection";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

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

  const effectiveRole: EffectiveRole =
    ["admin", "manager", "user"].includes(user.role)
      ? (user.role as EffectiveRole)
      : "user";

  const lazyCards = getLazyCards(user, effectiveRole);

  // Section titles สำหรับ accessibility / visual
  const sectionTitles = [
    "Header Section",
    "Registration Section",
    "Salary Certificate",
    "Medical Certificate",
    "ID Card",
    "Kbank Notifications",
    "Special Branch",
    "Footer / Actions",
  ] as const;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8">
      {lazyCards.map(({ component, delay, isBlurred, fallback }, idx) => (
        <PageSection
          key={idx}
          id={`section-${idx}`}
          title={sectionTitles[idx] ?? `Section ${idx + 1}`}
        >
          <LazyA4Card
            delay={delay}
            isBlurred={isBlurred}
            fallback={fallback}
          >
            {component}
          </LazyA4Card>
        </PageSection>
      ))}
    </main>
  );
};

// SecretPage.displayName = undefined; // ซ่อนชื่อใน DevTools

export default SecretPage;
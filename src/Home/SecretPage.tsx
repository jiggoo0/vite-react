"use client";

import { FC, ReactNode } from "react";
import { useProtectedAuth } from "../hooks/useProtectedAuth";
import LazyA4Card from "./components/common/LazyA4Card";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

type LazyCard = {
  component: ReactNode;
  delay?: number;
  isBlurred?: boolean;
  fallback?: ReactNode;
};

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
    ["admin", "manager", "user"].includes(user.role) ? (user.role as EffectiveRole) : "user";

  const lazyCards: LazyCard[] = getLazyCards(user, effectiveRole);

  const sectionTitles: readonly string[] = [
    "Header Section",
    "Registration Section",
    "Salary Certificate",
    "Medical Certificate",
    "ID Card",
    "Kbank Notifications",
    "Special Branch",
    "Footer / Actions",
  ];

  const sections = lazyCards.map((card, idx) => ({
    title: sectionTitles[idx] ?? `Section ${idx + 1}`,
    cards: [card],
  }));

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8">
      <div className="container max-w-6xl mx-auto flex flex-col gap-12">
        {sections.map(({ title, cards }, sectionIdx) => (
          <section key={sectionIdx} className="flex flex-col gap-6">
            <h2 className="text-base font-semibold border-b border-gray-300">{title}</h2>
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
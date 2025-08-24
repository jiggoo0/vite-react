"use client";

import React, { FC, Suspense } from "react";
import { useProtectedAuth } from "@/hooks/useProtectedAuth";
import {
  getLazyCards,
  EffectiveRole,
  LazyCard,
} from "@/config/secretCards.config";
import PageSection from "@/Home/components/common/PageSection";

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

  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(
    user.role
  )
    ? (user.role as EffectiveRole)
    : "user";

  const safeUser = {
    username: user.username || "unknown",
    role: effectiveRole,
  };

  const lazyCards: LazyCard[] = getLazyCards(safeUser, effectiveRole);

  return (
    <main className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {lazyCards.map((card, idx) => (
        <PageSection key={idx} hideTitle>
          {card.fallback ? (
            <Suspense fallback={card.fallback}>{card.component}</Suspense>
          ) : (
            card.component
          )}
        </PageSection>
      ))}
    </main>
  );
};

SecretPage.displayName = "SecretPage";

export default SecretPage;

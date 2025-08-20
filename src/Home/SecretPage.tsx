"use client";

import { FC, ReactNode } from "react";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import LazyA4Card from "@home/components/common/LazyA4Card";
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

/**
 * SecretPage
 */
const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
        <span className="text-lg font-medium animate-pulse">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(
    user.role
  )
    ? (user.role as EffectiveRole)
    : "user";

  const lazyCards = getLazyCards(user, effectiveRole);

  // แยก Section
  const headerCards = lazyCards.slice(0, 3);
  const registrationCard = lazyCards.slice(3, 4);
  const salaryCard = lazyCards.slice(4, 5);
  const medicalCard = lazyCards.slice(5, 6);
  const idCardCard = lazyCards.slice(6, 7);
  const kbankCards = lazyCards.slice(7, 8);
  const specialBranchCard = lazyCards.slice(8, 9);
  const footerCards = lazyCards.slice(9);

  return (
    <main className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 lg:px-8 py-8">
      <div className="container max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col gap-6">
          {headerCards.map(({ component, delay }, idx) => (
            <LazyA4Card key={idx} delay={delay}>{component}</LazyA4Card>
          ))}
        </div>

        {/* Registration Section */}
        {registrationCard.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* Salary Certificate */}
        {salaryCard.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* Medical Certificate */}
        {medicalCard.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* ID Card */}
        {idCardCard.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* Kbank Notifications */}
        {kbankCards.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* Special Branch (Admin/Manager) */}
        {specialBranchCard.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

        {/* Footer / Actions */}
        {footerCards.map(({ component, delay, isBlurred, fallback }, idx) => (
          <LazyA4Card key={idx} delay={delay} isBlurred={isBlurred} fallback={fallback as ReactNode}>
            {component}
          </LazyA4Card>
        ))}

      </div>
    </main>
  );
};

SecretPage.displayName = "SecretPage";

export default SecretPage;
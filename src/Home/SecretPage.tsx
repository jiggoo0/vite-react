"use client";

import { FC } from "react";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import LazyA4Card from "@home/components/common/LazyA4Card";

// ใช้ path แบบ relative เพื่อแก้ปัญหา import ไม่เจอ
import { getLazyCards, EffectiveRole } from "../config/secretCards.config";

/**
 * SecretPage
 * หน้าแสดงเนื้อหาแบบลับ (Secret Content)
 * - โหลดการ์ดต่าง ๆ แบบ lazy
 * - รองรับบทบาท admin / manager / user
 */
const SecretPage: FC = () => {
  const { user, loading } = useProtectedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  // กำหนดบทบาทของผู้ใช้
  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(
    user.role
  )
    ? (user.role as EffectiveRole)
    : "user";

  return (
    <section className="min-h-screen bg-base-200 text-base-content px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="container max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        {getLazyCards(user, effectiveRole).map(
          ({ component, delay, isBlurred, fallback }, idx) => (
            <LazyA4Card
              key={idx}
              delay={delay}
              isBlurred={isBlurred}
              fallback={fallback}
            >
              {component}
            </LazyA4Card>
          )
        )}
      </div>
    </section>
  );
};

SecretPage.displayName = "SecretPage";

export default SecretPage;
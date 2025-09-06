"use client";

import { FC, Suspense, memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { getLazyCards, EffectiveRole, LazyCard } from "@/config/secretCards.config";
import PageSection from "@/Home/components/common/PageSection";

const AdminTools: FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) return null;

  // Ensure only known roles are used
  const effectiveRole: EffectiveRole = ["admin", "manager", "user"].includes(user.role)
    ? (user.role as EffectiveRole)
    : "user";

  const safeUser = {
    username: user.username || "unknown",
    role: effectiveRole,
  };

  const lazyCards: LazyCard[] = getLazyCards(safeUser, effectiveRole);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-[1200px] space-y-8 px-4 sm:px-6 lg:px-8">
        {lazyCards.map((card) => (
          <PageSection key={card.title} hideTitle>
            <Suspense
              fallback={
                <div className="w-full py-6 text-center text-gray-500">
                  {card.fallback || "Loading..."}
                </div>
              }
            >
              {card.component}
            </Suspense>
          </PageSection>
        ))}
      </div>
    </main>
  );
};

export default memo(AdminTools);

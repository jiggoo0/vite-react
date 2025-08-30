// src/Router/PublicRoute.tsx
"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseUserFromStorage, User } from "@/utils/auth";

interface PublicRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const PublicRoute: FC<PublicRouteProps> = ({ children, redirectTo = "/secret" }) => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user: User | null = parseUserFromStorage();
    if (user) {
      setTimeout(() => navigate(redirectTo, { replace: true }), 0);
      return;
    }
    setIsReady(true);
  }, [navigate, redirectTo]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return <>{children}</>;
};

export default PublicRoute;

"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

type User = { username: string; role: "admin" | "user" | "manager" };

/** Parse user จาก localStorage */
const parseUserFromStorage = (): User | null => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed?.username && ["admin", "user", "manager"].includes(parsed.role)) {
      return parsed;
    }
  } catch (err) {
    console.warn("Failed to parse user from storage:", err);
  }

  return null;
};

const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const user = parseUserFromStorage();

    if (!user) {
      setIsAuthenticated(false);
      // redirect ไป login
      setTimeout(() => navigate("/login", { replace: true }), 0);
      return;
    }

    setIsAuthenticated(true);
  }, [navigate]);

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default GuardRoutes;

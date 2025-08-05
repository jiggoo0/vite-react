// src/Router/GuardRoutes.tsx

import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (!stored) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (
        typeof parsed !== "object" ||
        parsed === null ||
        !("username" in parsed) ||
        !("role" in parsed) ||
        typeof (parsed as any).username !== "string" ||
        !["admin", "user"].includes((parsed as any).role)
      ) {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
      }
    } catch {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // Render children only if user is valid
  return <>{children}</>;
};

export default GuardRoutes;
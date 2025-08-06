import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (!stored) {
      navigate("/login", { replace: true });
      setIsAuthenticated(false);
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
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
      setIsAuthenticated(false);
    }
  }, [navigate]);

  if (isAuthenticated === null) {
    // Loading state - สามารถใส่ spinner หรือ loading indicator ได้
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!isAuthenticated) {
    // ไม่แสดง content หากยังไม่ auth
    return null;
  }

  return <>{children}</>;
};

export default GuardRoutes;
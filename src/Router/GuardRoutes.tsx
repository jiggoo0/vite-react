import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

// ✅ User type ปรับให้รองรับ manager
type User = { username: string; role: "admin" | "user" | "manager" };

// ✅ Type guard แบบปลอดภัย
const isValidUser = (data: unknown): data is User => {
  if (typeof data !== "object" || data === null) return false;

  const candidate = data as Record<string, unknown>;
  return (
    typeof candidate.username === "string" &&
    ["admin", "user", "manager"].includes(candidate.role as string)
  );
};

// ✅ Parse user จาก localStorage
const parseUserFromStorage = (): User | null => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    return isValidUser(parsed) ? parsed : null;
  } catch (error) {
    console.error("Failed to parse user from storage:", error);
    return null;
  }
};

const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const user = parseUserFromStorage();
    if (!user) {
      setIsAuthenticated(false);
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

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default GuardRoutes;

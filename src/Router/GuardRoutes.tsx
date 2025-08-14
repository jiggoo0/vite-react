import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

type User = {
  username: string;
  role: "admin" | "user";
};

const isValidUser = (data: unknown): data is User => {
  if (typeof data !== "object" || data === null) return false;
  const user = data as Partial<User>;
  return (
    typeof user.username === "string" &&
    (user.role === "admin" || user.role === "user")
  );
};

const parseUserFromStorage = (): User | null => {
  const raw = localStorage.getItem("user");
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return isValidUser(parsed) ? parsed : null;
  } catch {
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

import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ เพิ่ม role ใหม่ manager
type UserRole = "admin" | "user" | "manager";

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: ReactNode;
}

interface User {
  role: UserRole;
}

// ✅ Type guard แบบปลอดภัย
const isUserWithAllowedRole = (
  obj: unknown,
  allowedRoles: UserRole[]
): obj is User => {
  if (typeof obj !== "object" || obj === null) return false;

  const candidate = obj as Record<string, unknown>;
  return (
    typeof candidate.role === "string" &&
    allowedRoles.includes(candidate.role as UserRole)
  );
};

const RoleGuard: FC<RoleGuardProps> = ({ allowedRoles, children }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      setAuthorized(false);
      setTimeout(() => navigate("/login", { replace: true }), 0);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (isUserWithAllowedRole(parsed, allowedRoles)) {
        setAuthorized(true);
      } else {
        localStorage.removeItem("user");
        setAuthorized(false);
        setTimeout(() => navigate("/403", { replace: true }), 0);
      }
    } catch (error) {
      console.error("Failed to parse user:", error);
      localStorage.removeItem("user");
      setAuthorized(false);
      setTimeout(() => navigate("/login", { replace: true }), 0);
    }
  }, [allowedRoles, navigate]);

  // Loading state
  if (authorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span
          className="loading loading-spinner loading-lg text-primary"
          aria-label="Loading"
          role="status"
        />
      </div>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
};

export default RoleGuard;
import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RoleGuardProps {
  allowedRoles: ("admin" | "user")[];
  children: ReactNode;
}

const RoleGuard: FC<RoleGuardProps> = ({ allowedRoles, children }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (!stored) {
      navigate("/login", { replace: true });
      setAuthorized(false);
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      if (
        typeof parsed === "object" &&
        parsed !== null &&
        "role" in parsed &&
        typeof (parsed as any).role === "string" &&
        allowedRoles.includes((parsed as any).role)
      ) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        navigate("/403", { replace: true });
      }
    } catch {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
      setAuthorized(false);
    }
  }, [allowedRoles, navigate]);

  if (authorized === null) {
    // กำลังโหลด/ตรวจสอบ
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!authorized) {
    // ไม่อนุญาต ไม่แสดง children
    return null;
  }

  return <>{children}</>;
};

export default RoleGuard;
import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface RoleGuardProps {
  allowedRoles: string[];
  children: ReactNode;
}

// 🛡️ Guard route by role (e.g., ['admin'])
const RoleGuard: FC<RoleGuardProps> = ({ allowedRoles, children }) => {
  const { isAuthenticated, role, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(role)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-error text-center px-4">
        <h1 className="text-4xl font-bold mb-2">403</h1>
        <p className="text-lg mb-4">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
        <Navigate to="/" replace />
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleGuard;

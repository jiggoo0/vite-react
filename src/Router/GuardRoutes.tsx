// ✅ src/Router/GuardRoutes.tsx
import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const isAuthenticated = true; // เปลี่ยน logic ตามจริง
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default GuardRoutes;
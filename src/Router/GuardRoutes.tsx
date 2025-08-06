import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GuardRoutesProps {
  children: ReactNode;
}

type User = {
  username: string;
  role: "admin" | "user";
};

// ตรวจสอบว่า data เป็น User ที่ถูกต้องหรือไม่
const isValidUser = (data: unknown): data is User => {
  if (typeof data !== "object" || data === null) return false;
  const user = data as Partial<User>;
  return (
    typeof user.username === "string" &&
    (user.role === "admin" || user.role === "user")
  );
};

// ฟังก์ชัน parse user จาก localStorage
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

/**
 * GuardRoutes - ตรวจสอบ user login และ valid หรือไม่
 * ถ้าไม่ valid หรือไม่มี user ให้ redirect ไปหน้า login
 * ถ้า valid ให้แสดง children
 */
const GuardRoutes: FC<GuardRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const user = parseUserFromStorage();

    if (!user) {
      setIsAuthenticated(false);
      navigate("/login", { replace: true });
      return;
    }

    setIsAuthenticated(true);
  }, [navigate]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default GuardRoutes;

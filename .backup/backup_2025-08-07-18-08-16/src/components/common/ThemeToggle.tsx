"use client";

import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";

/**
 * 🔐 LogoutButton — ปุ่มออกจากระบบ พร้อมนำทางกลับไปยังหน้าล็อกอิน
 *
 * - ใช้งานร่วมกับ useAuth
 * - มีไอคอน + สไตล์มาตรฐาน
 */
const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true }); // ✅ กลับไปยังหน้าล็อกอิน
    } catch (error) {
      console.error("Logout failed:", error);
      // อาจแสดงข้อความแจ้งเตือนผู้ใช้ในภายหลัง
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="gap-2 text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
    >
      <LogOut className="w-4 h-4" />
      ออกจากระบบ
    </Button>
  );
};

export default LogoutButton;

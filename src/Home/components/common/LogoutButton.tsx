"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import Button from "@/Home/components/ui/Button";

const LogoutButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // ถ้า useAuth ไม่มี logout ให้ fallback เป็น async no-op
  const logout = auth.logout ?? (async () => {});

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="gap-2 text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
      disabled={loading}
      aria-busy={loading}
      aria-label="ออกจากระบบ"
    >
      <LogOut className="w-4 h-4" aria-hidden="true" />
      <span>ออกจากระบบ</span>
    </Button>
  );
};

export default LogoutButton;

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/Home/components/ui/Button";
/**
 * LogoutButton
 * -------------------------
 * ปุ่มออกจากระบบ
 * - รองรับ loading state
 * - ใช้ aria attributes เพื่อ accessibility
 */
const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        setLoading(true);
        try {
            if (logout)
                await logout();
            navigate("/login", { replace: true });
        }
        catch (err) {
            console.error("Logout failed:", err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs(Button, { onClick: handleLogout, variant: "outline", size: "sm", className: "gap-2 text-red-600 hover:text-red-700 border-red-300 hover:border-red-400", disabled: loading, "aria-busy": loading, "aria-label": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A", children: [_jsx(LogOut, { className: "w-4 h-4", "aria-hidden": "true" }), _jsx("span", { className: loading ? "opacity-70" : "", children: "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" })] }));
};
LogoutButton.displayName = "LogoutButton";
export default LogoutButton;

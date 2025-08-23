"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
/**
 * SecretActions
 * -------------------------
 * ปุ่ม action สำหรับผู้ใช้ในหน้าลับ
 * - จัดการงานของฉัน
 * - เข้าสู่แผง Admin (เฉพาะ admin/manager)
 * - ออกจากระบบ
 * - Responsive, Accessible, Professional UI
 */
const SecretActions = ({ role }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    };
    return (_jsxs("div", { className: "flex flex-wrap gap-4 justify-center md:justify-start", children: [_jsx("button", { type: "button", className: "btn btn-primary flex-1 md:flex-none\n                   transition-transform duration-200 hover:scale-105\n                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", onClick: () => alert("Manage your jobs feature coming soon!"), "aria-label": "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19", children: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19" }), (role === "admin" || role === "manager") && (_jsx("button", { type: "button", className: "btn btn-secondary flex-1 md:flex-none\n                     transition-transform duration-200 hover:scale-105\n                     focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2", onClick: () => navigate("/admin"), "aria-label": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 Admin", children: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 Admin" })), _jsx("button", { type: "button", className: "btn btn-outline btn-error flex-1 md:flex-none\n                   transition-transform duration-200 hover:scale-105\n                   focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2", onClick: handleLogout, "aria-label": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A", children: "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A" })] }));
};
SecretActions.displayName = "SecretActions";
export default SecretActions;

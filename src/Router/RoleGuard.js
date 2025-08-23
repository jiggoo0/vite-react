import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// ✅ Type guard แบบปลอดภัย
const isUserWithAllowedRole = (obj, allowedRoles) => {
    if (typeof obj !== "object" || obj === null)
        return false;
    const candidate = obj;
    return (typeof candidate.role === "string" &&
        allowedRoles.includes(candidate.role));
};
const RoleGuard = ({ allowedRoles, children }) => {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState(null);
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
            }
            else {
                localStorage.removeItem("user");
                setAuthorized(false);
                setTimeout(() => navigate("/403", { replace: true }), 0);
            }
        }
        catch (error) {
            console.error("Failed to parse user:", error);
            localStorage.removeItem("user");
            setAuthorized(false);
            setTimeout(() => navigate("/login", { replace: true }), 0);
        }
    }, [allowedRoles, navigate]);
    // Loading state
    if (authorized === null) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-base-100", children: _jsx("span", { className: "loading loading-spinner loading-lg text-primary", "aria-label": "Loading", role: "status" }) }));
    }
    if (!authorized)
        return null;
    return _jsx(_Fragment, { children: children });
};
export default RoleGuard;

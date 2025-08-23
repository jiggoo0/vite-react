import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// ✅ Type guard แบบปลอดภัย
const isValidUser = (data) => {
    if (typeof data !== "object" || data === null)
        return false;
    const candidate = data;
    return (typeof candidate.username === "string" &&
        ["admin", "user", "manager"].includes(candidate.role));
};
// ✅ Parse user จาก localStorage
const parseUserFromStorage = () => {
    try {
        const raw = localStorage.getItem("user");
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        return isValidUser(parsed) ? parsed : null;
    }
    catch (error) {
        console.error("Failed to parse user from storage:", error);
        return null;
    }
};
const GuardRoutes = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const user = parseUserFromStorage();
        if (!user) {
            setIsAuthenticated(false);
            setTimeout(() => navigate("/login", { replace: true }), 0);
            return;
        }
        setIsAuthenticated(true);
    }, [navigate]);
    // Loading state
    if (isAuthenticated === null) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("span", { className: "loading loading-spinner loading-lg text-primary" }) }));
    }
    if (!isAuthenticated)
        return null;
    return _jsx(_Fragment, { children: children });
};
export default GuardRoutes;

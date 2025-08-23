import { useState, useEffect, useCallback } from "react";
/**
 * parseUserFromStorage
 * -------------------------
 * อ่านข้อมูลผู้ใช้จาก localStorage และตรวจสอบความถูกต้อง
 */
export const parseUserFromStorage = () => {
    const raw = localStorage.getItem("user");
    if (!raw)
        return null;
    try {
        const parsed = JSON.parse(raw);
        if (parsed &&
            typeof parsed === "object" &&
            "username" in parsed &&
            typeof parsed.username === "string" &&
            "role" in parsed &&
            ["admin", "user"].includes(parsed.role)) {
            return parsed;
        }
    }
    catch (error) {
        console.error("Failed to parse user from storage:", error);
    }
    return null;
};
/**
 * useAuth
 * -------------------------
 * Hook สำหรับจัดการ authentication ของผู้ใช้
 */
export const useAuth = () => {
    const [user, setUser] = useState(null);
    // โหลด user จาก storage ตอน mount
    useEffect(() => {
        const storedUser = parseUserFromStorage();
        setUser(storedUser);
    }, []);
    const isAuthenticated = Boolean(user);
    /**
     * logout
     * -------------------------
     * ล้างข้อมูลผู้ใช้จาก storage และ state
     */
    const logout = useCallback(() => {
        try {
            localStorage.removeItem("user");
            setUser(null);
        }
        catch (err) {
            console.error("Logout failed:", err);
        }
    }, []);
    return { user, isAuthenticated, logout };
};

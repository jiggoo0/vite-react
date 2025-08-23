"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useProtectedAuth } from "../hooks/useProtectedAuth";
import LazyA4Card from "./components/common/LazyA4Card";
import { getLazyCards } from "../config/secretCards.config";
const SecretPage = () => {
    const { user, loading } = useProtectedAuth();
    if (loading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 text-gray-900", children: _jsx("span", { className: "text-lg font-medium", children: "Loading..." }) }));
    }
    if (!user)
        return null;
    const effectiveRole = ["admin", "manager", "user"].includes(user.role) ? user.role : "user";
    const lazyCards = getLazyCards(user, effectiveRole);
    const sectionTitles = [
        "Header Section",
        "Registration Section",
        "Salary Certificate",
        "Medical Certificate",
        "ID Card",
        "Kbank Notifications",
        "Special Branch",
        "Footer / Actions",
    ];
    const sections = lazyCards.map((card, idx) => ({
        title: sectionTitles[idx] ?? `Section ${idx + 1}`,
        cards: [card],
    }));
    return (_jsx("main", { className: "min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8", children: _jsx("div", { className: "container max-w-6xl mx-auto flex flex-col gap-12", children: sections.map(({ title, cards }, sectionIdx) => (_jsxs("section", { className: "flex flex-col gap-6", children: [_jsx("h2", { className: "text-base font-semibold border-b border-gray-300", children: title }), cards.map(({ component, delay, isBlurred, fallback }, idx) => (_jsx(LazyA4Card, { delay: delay, isBlurred: isBlurred, fallback: fallback, children: component }, `${sectionIdx}-${idx}`)))] }, sectionIdx))) }) }));
};
SecretPage.displayName = "SecretPage";
export default SecretPage;

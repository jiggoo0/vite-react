"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "@layout/partials/Header";
import SidebarNav from "@layout/SidebarNav";
import Footer from "@layout/partials/Footer";
import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";
/**
 *  Layout Component
 *
 * :
 * - Header (Sticky)
 * - Sidebar ( mobile)
 * - Main Content
 * - Footer
 * - Floating Components: ChatWidget, BackToTop, DisclaimerModal
 * - Responsive, accessible, professional UI
 */
const Layout = ({ children }) => {
    const floatingComponents = [ChatWidget, BackToTop, DisclaimerModal];
    return (_jsxs("div", { className: "flex min-h-screen bg-base-100 text-base-content transition-colors duration-300", children: [_jsx(SidebarNav, {}), _jsxs("div", { className: "flex flex-col flex-1 min-h-screen", children: [_jsx(Header, {}), _jsx("main", { id: "main-content", role: "main", tabIndex: -1, "aria-live": "polite", "aria-atomic": "true", className: "flex-1 focus:outline-none", children: _jsx("div", { className: "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6", children: children ?? _jsx(Outlet, {}) }) }), _jsx(Footer, {})] }), _jsx("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-4 pointer-events-none", children: floatingComponents.map((Component, idx) => (_jsx("div", { className: "pointer-events-auto", children: _jsx(Component, {}) }, idx))) })] }));
};
Layout.displayName = "Layout";
export default Layout;

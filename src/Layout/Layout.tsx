// src/Layout/Layout.tsx
"use client";

import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "@layout/partials/Header";
import SidebarNav from "@layout/SidebarNav";
import Footer from "@layout/partials/Footer";

import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";

interface LayoutProps {
  children?: ReactNode;
}

/**
 * 🔹 Layout Component
 *
 * - Sticky Header
 * - Sidebar (responsive)
 * - Main Content (focusable, accessible)
 * - Footer
 * - Floating Components: ChatWidget, BackToTop, DisclaimerModal
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  const floatingComponents: FC[] = [ChatWidget, BackToTop, DisclaimerModal];

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main Section */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main
          id="main-content"
          role="main"
          tabIndex={-1}
          aria-live="polite"
          aria-atomic="true"
          className="flex-1 focus:outline-none"
        >
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
            {children ?? <Outlet />}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Components */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 pointer-events-none">
        {floatingComponents.map((Component, idx) => (
          <div key={idx} className="pointer-events-auto">
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
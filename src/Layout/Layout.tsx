"use client";

import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@layout/Navbar";
import Footer from "@layout/partials/Footer";

import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";

interface LayoutProps {
  children?: ReactNode;
}

/**
 * 🎨 Layout Component
 *
 * - แสดง Navbar / Footer / Main content
 * - รองรับ floating components (Chat, BackToTop, Disclaimer)
 * - รองรับ focus management และ accessibility
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  const floatingComponents = [ChatWidget, BackToTop, DisclaimerModal];

  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-base-100 shadow-sm transition-shadow duration-300">
        <Navbar />
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="flex-grow w-full focus:outline-none"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {children ?? <Outlet />}
        </div>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="mt-auto">
        <Footer />
      </footer>

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

export default Layout;

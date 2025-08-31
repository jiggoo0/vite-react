// src/Layout/Layout.tsx
"use client";

import { FC, ReactNode, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./partials/Header";
import SidebarNav from "./SidebarNav";
import Footer from "./partials/Footer";
import FallbackLoader from "../utils/common/FallbackLoader";

// Lazy-loaded floating components
const ChatWidget = lazy(() => import("../utils/common/ChatWidget"));
const BackToTop = lazy(() => import("../utils/common/BackToTop"));
const DisclaimerModal = lazy(() => import("../utils/common/DisclaimerModal"));

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const floatingComponents = [
    { Component: ChatWidget, name: "ChatWidget" },
    { Component: BackToTop, name: "BackToTop" },
    { Component: DisclaimerModal, name: "DisclaimerModal" },
  ];

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main Section */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />

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

        <Footer />
      </div>

      {/* Floating Components */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 pointer-events-none">
        {floatingComponents.map(({ Component, name }) => (
          <div key={name} className="pointer-events-auto" aria-label={name}>
            <Suspense fallback={<FallbackLoader message={`⏳ กำลังโหลด ${name}...`} />}>
              <Component />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;

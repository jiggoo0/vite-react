import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/Layout/partials/Footer/Footer";
import ChatWidget from "@/utils/common/ChatWidget";
import DisclaimerModal from "@/utils/common/DisclaimerModal";
import BackToTop from "@/utils/common/BackToTop";

/**
 * 🌟 Layout Component
 *
 * - จัดวาง Navbar, Footer, และ Modals
 * - รองรับการแสดงผล children หรือ Outlet สำหรับ routing
 * - Responsive design: จัดกลาง content พร้อม max width
 * - ควบคุม background และสีตัวอักษรจาก theme
 */
const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main
        role="main"
        className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children ?? <Outlet />}
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full bg-base-200">
        <Footer />
      </footer>

      {/* Utility Components */}
      <ChatWidget />
      <BackToTop />
      <DisclaimerModal />
    </div>
  );
};

export default Layout;
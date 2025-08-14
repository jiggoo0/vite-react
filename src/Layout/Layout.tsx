import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

// Layout components
import Navbar from "@layout/Navbar";
import Footer from "@layout/partials/Footer";

// Utility components
import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-base-100 shadow-sm"
        role="banner"
        aria-label="ส่วนหัวเว็บไซต์"
      >
        <Navbar />
      </header>

      {/* Main content */}
      <main
        role="main"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="flex-grow w-full"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ?? <Outlet />}
        </div>
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>

      {/* Floating / Utility components */}
      <ChatWidget />
      <BackToTop />
      <DisclaimerModal />
    </div>
  );
};

export default Layout;

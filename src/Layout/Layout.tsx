import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

// Layout components
import Navbar from "@layout/Navbar";
import Footer from "@layout/partials/Footer";

// Utility / Floating Components
import ChatWidget from "@utils/common/ChatWidget";
import DisclaimerModal from "@utils/common/DisclaimerModal";
import BackToTop from "@utils/common/BackToTop";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content transition-colors duration-300">
      {/* =======================
          Header / Navbar
      ======================= */}
      <header
        className="sticky top-0 z-50 bg-base-100 shadow-sm transition-shadow duration-300"
        role="banner"
        aria-label="เว็บไซต์ส่วนหัว"
      >
        <Navbar />
      </header>

      {/* =======================
          Main Content
      ======================= */}
      <main
        role="main"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="flex-grow w-full focus:outline-none"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ?? <Outlet />}
        </div>
      </main>

      {/* =======================
          Footer
      ======================= */}
      <footer role="contentinfo" className="mt-auto">
        <Footer />
      </footer>

      {/* =======================
          Floating / Utility Components
      ======================= */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <ChatWidget />
        </div>
        <div className="pointer-events-auto">
          <BackToTop />
        </div>
        <div className="pointer-events-auto">
          <DisclaimerModal />
        </div>
      </div>
    </div>
  );
};

export default Layout;

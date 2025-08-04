// ✅ src/Layout/partials/Footer/Footer.tsx

import { FC } from "react";
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://lin.ee/gVptUhR",
    label: "LINE",
    text: "LINE: @462FQFC",
    icon: FaLine
  },
  {
    href: "https://www.instagram.com/jpsystem.official",
    label: "Instagram",
    text: "@jpsystem.official",
    icon: FaInstagram
  },
  {
    href: "mailto:contact@jpsystem.dev",
    label: "Email",
    text: "contact@jpsystem.dev",
    icon: FaEnvelope
  },
  {
    href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
    label: "Messenger",
    text: "Messenger",
    icon: FaFacebookMessenger
  }
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-content/10 dark:border-base-content/20 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        {/* 🔗 ช่องทางติดต่อ */}
        <nav
          className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 text-sm"
          aria-label="ช่องทางติดต่อ"
        >
          {socialLinks.map(({ href, label, text, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`ติดต่อผ่าน ${label}`}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
            >
              <Icon className="text-xl text-primary" aria-hidden="true" />
              <span>{text}</span>
            </a>
          ))}
        </nav>

        {/* © ลิขสิทธิ์ */}
        <p className="text-xs text-neutral-500">
          &copy; {currentYear} JP Visual & Docs — Powered by Applicationlab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

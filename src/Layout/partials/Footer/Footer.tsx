import { FC } from "react";
import {
  FaLine,
  FaInstagram,
  FaEnvelope,
  FaFacebookMessenger,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://lin.ee/gVptUhR",
    label: "LINE",
    text: "LINE: @462FQFC",
    icon: FaLine,
  },
  {
    href: "https://www.instagram.com/jpsystem.official",
    label: "Instagram",
    text: "@jpsystem.official",
    icon: FaInstagram,
  },
  {
    href: "mailto:contact@jpsystem.dev",
    label: "Email",
    text: "contact@jpsystem.dev",
    icon: FaEnvelope,
  },
  {
    href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
    label: "Messenger",
    text: "Messenger",
    icon: FaFacebookMessenger,
  },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-base-200 border-t border-base-content/10 dark:border-base-content/20 py-10"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        {/* ช่องทางติดต่อ */}
        <nav
          aria-label="ช่องทางติดต่อ"
          className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400"
        >
          {socialLinks.map(({ href, label, text, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`ติดต่อผ่าน ${label}`}
              className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200"
            >
              <Icon className="text-xl text-primary" aria-hidden="true" />
              <span>{text}</span>
            </a>
          ))}
        </nav>

        {/* ลิขสิทธิ์ */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 select-none">
          &copy; {currentYear} JP Visual & Docs — Powered by Applicationlab. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
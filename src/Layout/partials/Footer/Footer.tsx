// src/Layout/partials/Footer.tsx
"use client";

import { FC } from "react";
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

interface SocialLink {
  href: string;
  label: string;
  text: string;
  icon: FC<{ className?: string; "aria-hidden"?: boolean }>;
}

const socialLinks: SocialLink[] = [
  { href: "https://lin.ee/gVptUhR", label: "LINE", text: "LINE: @462FQFC", icon: FaLine },
  {
    href: "https://www.instagram.com/jpsystem.official",
    label: "Instagram",
    text: "@jpsystem.official",
    icon: FaInstagram,
  },
  {
    href: "mailto:jpvisouldocs@outlook.co.th",
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
  {
    href: "https://www.tiktok.com/@jaopa.zerofour",
    label: "TikTok",
    text: "@jaopa.zerofour",
    icon: SiTiktok,
  },
];

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-base-200 border-t border-base-content/10 dark:border-base-content/20 py-10"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
        {/* Social Links */}
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
              className="group inline-flex items-center gap-2 transition-transform duration-300 hover:text-primary"
            >
              <Icon
                className="text-xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                aria-hidden
              />
              <span className="transition-colors duration-300 group-hover:text-primary">
                {text}
              </span>
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px w-2/3 mx-auto bg-base-content/10 dark:bg-base-content/20" />

        {/* Copyright */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 select-none leading-relaxed">
          &copy; {year} <span className="font-semibold">JP Visual & Docs</span> — Powered by{" "}
          <a
            href="https://applicationlab.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary transition-colors duration-200"
          >
            Applicationlab
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;

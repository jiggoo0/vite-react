// ✅ src/utils/common/SocialIcons.tsx — Compact Social Icon Links

import { FC } from "react";
import { Facebook, Instagram, Youtube, Globe } from "lucide-react";

/**
 * 🌐 SocialIcons
 *
 * - แสดงชุดลิงก์ไอคอนโซเชียล
 * - ใช้ Lucide icon + Tailwind + A11y
 * - สามารถฝังใน Footer / Hero / Contact ได้
 */
const SocialIcons: FC = () => {
  const links = [
    {
      href: "https://facebook.com/jpvisual",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://instagram.com/jpvisual",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://youtube.com/@jpvisual",
      label: "YouTube",
      icon: Youtube,
    },
    {
      href: "https://jpvisual.com",
      label: "เว็บไซต์หลัก",
      icon: Globe,
    },
  ];

  return (
    <nav
      className="flex items-center gap-4"
      aria-label="ลิงก์โซเชียลมีเดียของ JP Visual"
    >
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="text-base-content hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
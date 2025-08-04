// ✅ src/utils/common/SocialIcons.tsx

import { FC } from "react";
import { Facebook, Instagram, Youtube, Globe } from "lucide-react";

/**
 * 🌐 SocialIcons — แสดงชุดลิงก์โซเชียลไอคอนแบบ compact
 *
 * - ใช้ไอคอนจาก Lucide
 * - Tailwind รองรับการปรับแต่งขนาด/สี
 */
const SocialIcons: FC = () => {
  const links = [
    {
      href: "https://facebook.com/jpvisual",
      label: "Facebook",
      icon: Facebook
    },
    {
      href: "https://instagram.com/jpvisual",
      label: "Instagram",
      icon: Instagram
    },
    {
      href: "https://youtube.com/@jpvisual",
      label: "YouTube",
      icon: Youtube
    },
    {
      href: "https://jpvisual.com",
      label: "เว็บไซต์หลัก",
      icon: Globe
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-base-content hover:text-primary transition"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

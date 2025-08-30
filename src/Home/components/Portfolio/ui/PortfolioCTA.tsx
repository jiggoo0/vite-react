"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface PortfolioCTAProps {
  href: string;
}

const PortfolioCTA: FC<PortfolioCTAProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ดูเพิ่มเติมเกี่ยวกับโปรเจกต์นี้"
      className="
        inline-flex items-center gap-2 text-sm font-medium text-primary
        hover:text-primary-dark hover:underline
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
        focus-visible:ring-offset-1 rounded transition-colors duration-200
      "
    >
      ดูเพิ่มเติม
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

PortfolioCTA.displayName = "PortfolioCTA";

export default PortfolioCTA;

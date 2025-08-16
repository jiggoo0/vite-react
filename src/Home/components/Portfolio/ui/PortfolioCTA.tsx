'use client';

import { FC } from 'react';
import { ArrowRight } from 'lucide-react';

type PortfolioCTAProps = {
  href: string;
};

const PortfolioCTA: FC<PortfolioCTAProps> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="ดูเพิ่มเติมเกี่ยวกับโปรเจกต์นี้"
    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
  >
    ดูเพิ่มเติม
    <ArrowRight className="h-4 w-4" />
  </a>
);

export default PortfolioCTA;

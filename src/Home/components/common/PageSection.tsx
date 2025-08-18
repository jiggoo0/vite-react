"use client";

import { FC, ReactNode } from "react";

export interface PageSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bgClass?: string; // เพิ่ม bgClass
}

const PageSection: FC<PageSectionProps> = ({
  id,
  title,
  children,
  bgClass = "bg-base-100",
}) => {
  return (
    <section id={id} className={`${bgClass} py-16 px-4 md:px-8`}>
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
};

export default PageSection;

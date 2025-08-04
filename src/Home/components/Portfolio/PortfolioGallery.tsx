// ✅ src/Home/components/Portfolio/PortfolioGallery.tsx — Portfolio Gallery Production Ready

"use client";

import { useState } from "react";
import { portfolioItems } from "@/data/portfolioItems";
import { cn } from "@/utils/cn";
import PortfolioFilter from "./ui/PortfolioFilter";
import PortfolioCTA from "./ui/PortfolioCTA";
import type { PortfolioItem } from "@/data/portfolioItems";

/**
 * ✅ PortfolioGallery
 * - แสดงแกลเลอรีผลงานที่เคยทำ
 * - รองรับ filter แยกตามประเภท
 * - ใช้ร่วมกับ PortfolioCTA เพื่อให้ผู้ใช้ดูงานเพิ่มเติม
 */
const PortfolioGallery: React.FC = () => {
  const categories: readonly string[] = [
    ...Array.from(new Set(portfolioItems.map((item) => item.category))),
  ];

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] || ""
  );

  const filteredItems: readonly PortfolioItem[] = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="portfolio-gallery"
      aria-labelledby="portfolio-gallery-title"
      className="space-y-8"
    >
      <h2 id="portfolio-gallery-title" className="sr-only">
        แกลเลอรีผลงานที่ผ่านมา
      </h2>

      {/* 🎛️ ตัวกรองประเภทผลงาน */}
      <PortfolioFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* 🖼️ รายการผลงาน */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-xl bg-white shadow-md transition hover:scale-[1.02]",
              "dark:bg-neutral-900"
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-base-content">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.category}</p>
              {item.link && (
                <div className="pt-2">
                  <PortfolioCTA href={item.link} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery;
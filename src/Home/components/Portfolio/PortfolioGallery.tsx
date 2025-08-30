"use client";

import { useState, useMemo, useCallback } from "react";
import { portfolioItems } from "@/data/portfolioItems";
import { cn } from "@/utils/cn";
import PortfolioFilter from "./ui/PortfolioFilter";
import PortfolioCTA from "./ui/PortfolioCTA";
export { default as FilterButton } from "./ui/FilterButton";

const PortfolioGallery: React.FC = () => {
  // สร้างรายการ categories แบบ unique
  const categories = useMemo(
    () => Array.from(new Set(portfolioItems.map((item) => item.category))),
    []
  );

  const [activeCategory, setActiveCategory] = useState<string>(() => categories[0] ?? "");

  // กรอง items ตาม category
  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <section id="portfolio-gallery" aria-labelledby="portfolio-gallery-title" className="space-y-8">
      {/* Hidden accessible heading for screen readers */}
      <h2 id="portfolio-gallery-title" className="sr-only">
        แกลเลอรีผลงานที่ผ่านมา
      </h2>

      {/* Filter categories */}
      <PortfolioFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={handleCategoryChange}
      />

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(({ id, image, title, category, link }) => (
          <article
            key={id}
            tabIndex={0}
            aria-label={`Portfolio item: ${title}`}
            className={cn(
              "overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary",
              "dark:bg-neutral-900 dark:shadow-gray-800/50"
            )}
          >
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-base-content">{title}</h3>
              <p className="text-sm text-muted">{category}</p>

              {link && (
                <div className="pt-2">
                  <PortfolioCTA href={link} />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery;

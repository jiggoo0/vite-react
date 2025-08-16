'use client';

import { useState, useMemo, useCallback } from 'react';
import { portfolioItems } from '@/data/portfolioItems';
import { cn } from '@/utils/cn';
import PortfolioFilter from './ui/PortfolioFilter';
import PortfolioCTA from './ui/PortfolioCTA';

const PortfolioGallery: React.FC = () => {
  const categories = useMemo(
    () => Array.from(new Set(portfolioItems.map((item) => item.category))),
    [],
  );

  const [activeCategory, setActiveCategory] = useState<string>(() => categories[0] ?? '');

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <section id="portfolio-gallery" aria-labelledby="portfolio-gallery-title" className="space-y-8">
      <h2 id="portfolio-gallery-title" className="sr-only">
        แกลเลอรีผลงานที่ผ่านมา
      </h2>

      <PortfolioFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(({ id, image, title, category, link }) => (
          <article
            key={id}
            className={cn(
              'overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-[1.02]',
              'dark:bg-neutral-900',
            )}
          >
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
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

'use client';

import { useState, useEffect, useRef } from 'react';
import { useMemo } from 'react';
import { CategoryTab } from './CategoryTab';

export default function CategoryNav({ onChangeCategory }: { onChangeCategory: (cat: string) => void }) {
  
  const categories = useMemo(
  () => ['All', 'Tech', 'Fashion', 'Sports', 'Health', 'Travel', 'Food', 'Entertainment', 'Education', 'Lifestyle'],
  []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const el = ulRef.current;
    if (el) {
      setIsScrollable(el.scrollWidth > el.clientWidth);
    }
  }, [categories, onChangeCategory]);

  useEffect(() => {
    onChangeCategory(categories[activeIndex]);
  }, [activeIndex, categories, onChangeCategory]);

  return (
    <nav
      aria-label="Category Navigation"
      className="max-w-5xl mx-auto overflow-x-auto px-4"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <ul
        ref={ulRef}
        role="tablist"
        className={`flex gap-1.5 p-0 m-0 w-fit ${isScrollable ? '' : 'mx-auto'}`}
      >
        {categories.map((category, index) => (
          <CategoryTab
            key={category}
            label={category}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </ul>
      <style jsx>{`
        nav::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}

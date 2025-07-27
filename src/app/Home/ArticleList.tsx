'use client';

import { useState } from 'react';
import CategoryNav from './CategoryNav';
import BlogCard from '@/components/BlogCard/BlogCard';

export default function ArticleList({ articles }: { articles: any[] }) {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All'
    ? articles
    : articles.filter((a) => a.tags?.includes(category)); // припускаємо, що в тебе є поле tags

  return (
    <>
      <CategoryNav onChangeCategory={setCategory} />
      <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4">
        {filtered.map(({ slug, title, date, readingTime, image }) => (
          <BlogCard
            key={slug}
            title={title}
            date={date}
            readingTime={readingTime}
            imageUrl={image}
            href={`/article/${slug}`}
          />
        ))}
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import CategoryNav from './CategoryNav';
import BlogCard from '@/components/BlogCard/BlogCard';

type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  image: string;
  description: string;
  tags?: string[];
};


export default function ArticleList({ articles }: { articles: Article[] }) {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All'
    ? articles
    : articles.filter((a) => a.tags?.includes(category)); 

  return (
    <>
      <CategoryNav onChangeCategory={setCategory} />
      <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4">
        {filtered.map(({ slug, title, date, readingTime, image, description }) => (
          <BlogCard
            key={slug}
            title={title}
            date={date}
            readingTime={readingTime}
            imageUrl={image}
            description={description}
            href={`/article/${slug}`}
          />
        ))}
      </div>
    </>
  );
}

import { getArticleBySlug, getAllArticleSlugs } from '@/lib/article';
import NotFound from '@/app/not-found';
import React from 'react';
import ArticlePhoto from './ArticlePhoto';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the params Promise
  const article = await getArticleBySlug(slug);
  if (!article) return <NotFound />;

  const contentHtml = await article.contentHtml;

  return (
    <>
      <ArticlePhoto src={article.image} />
      <ArticleInfo
        title={article.title}
        date={article.date}
        readingTime={article.readingTime}
      />
      <ArticleBody content={contentHtml} />
    </>
  );
}
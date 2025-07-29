import { getArticleBySlug, getAllArticleSlugs } from '@/lib/article';
import type { Metadata } from "next";
import NotFound from '@/app/not-found';
import React from 'react';
import ArticlePhoto from './ArticlePhoto';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params; 
  console.log('Slug:', slug); 

  const baseUrl = 'https://cerk.vercel.app';
  const defaultMetadata = {
    title: "cerk – personal tech & nature blog",
    description: "A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.",
    verification: {
      google: 'KDpigy36G4cK_CqL5s_V-xsN_r8COprfhH2ekYi-_IY',
    },
    alternates: {
      canonical: `${baseUrl}/`,
    },
  };

  try {
    const article = await getArticleBySlug(slug);
    if (!article) {
      console.log('Article not found for slug:', slug);
      return defaultMetadata;
    }

    return {
      title: `${article.title} – cerk blog`,
      description: article.description || defaultMetadata.description,
      verification: defaultMetadata.verification,
      alternates: {
        canonical: `${baseUrl}/article/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error fetching article for slug:', slug, error);
    return defaultMetadata;
  }
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
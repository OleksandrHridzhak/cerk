// src/app/article/[slug]/page.tsx
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/article';
import type { Metadata } from 'next';
import NotFound from '@/app/not-found';
import ArticlePhoto from './ArticlePhoto';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';

// Генерація статичних параметрів для SSG
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}

// Генерація метаданих
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // Чекаємо params, бо це Promise
  console.log('Slug:', slug);

  const baseUrl = 'https://cerk.vercel.app';
  const defaultMetadata = {
    title: 'cerk – personal tech & nature blog',
    description: 'A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.',
    verification: {
      google: 'KDpigy36G4cK_CqL5s_V-xsN_r8COprfhH2ekYi-_IY',
    },
    alternates: {
      canonical: `${baseUrl}/article/${slug}`,
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

// Компонент сторінки
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Чекаємо params
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <NotFound />;
  }

  const { contentHtml, title, image, date, readingTime } = article;

  return (
    <>
      <ArticlePhoto src={image} />
      <ArticleInfo title={title} date={date} readingTime={readingTime} />
      <ArticleBody content={contentHtml} />
    </>
  );
}
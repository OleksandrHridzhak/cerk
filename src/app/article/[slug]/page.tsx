// src/app/article/[slug]/page.tsx
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/article';
import { parseToISODateTime } from '@/lib/date';
import type { Metadata } from 'next';
import NotFound from '@/app/not-found';
import ArticlePhoto from './ArticlePhoto';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';


export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; 

  const baseUrl = 'https://cerk.vercel.app';
  const defaultTitle = 'cerk – personal tech & nature blog';
  const defaultDescription = 'A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.';
  
  const defaultMetadata: Metadata = {
    title: defaultTitle,
    description: defaultDescription,
    verification: {
      google: 'KDpigy36G4cK_CqL5s_V-xsN_r8COprfhH2ekYi-_IY',
    },
    alternates: {
      canonical: `${baseUrl}/article/${slug}`,
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: `${baseUrl}/article/${slug}`,
      siteName: 'cerk blog',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  try {
    const article = await getArticleBySlug(slug);
    if (!article) {
      return defaultMetadata;
    }

    const title = `${article.title} – cerk blog`;
    const description = article.description || defaultDescription;
    const imageUrl = article.image ? `${baseUrl}${article.image}` : undefined;

    return {
      title,
      description,
      verification: {
        google: 'KDpigy36G4cK_CqL5s_V-xsN_r8COprfhH2ekYi-_IY',
      },
      alternates: {
        canonical: `${baseUrl}/article/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${baseUrl}/article/${slug}`,
        siteName: 'cerk blog',
        type: 'article',
        publishedTime: article.date,
        ...(imageUrl && {
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ],
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...(imageUrl && { images: [imageUrl] }),
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error('Error fetching article for slug:', slug, error);
    return defaultMetadata;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <NotFound />;
  }

  const { contentHtml, title, image, date, readingTime, description } = article;
  const baseUrl = 'https://cerk.vercel.app';

  // Parse date to ISO format for JSON-LD
  const isoDate = parseToISODateTime(date);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description || `Read ${title} on cerk blog`,
    image: image ? `${baseUrl}${image}` : undefined,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Person',
      name: 'Oleksandr Hridzhak',
    },
    publisher: {
      '@type': 'Organization',
      name: 'cerk blog',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/article/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticlePhoto src={image} alt={title} />
      <ArticleInfo title={title} date={date} readingTime={readingTime} />
      <ArticleBody content={contentHtml} />
    </>
  );
}
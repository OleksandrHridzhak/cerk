import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/article';

const baseUrl = 'https://cerk.vercel.app';

function parseArticleDate(dateStr: string): Date {
  // Parse dates like "23 August 2025" or "3 December 2025"
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? new Date() : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: parseArticleDate(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...articleUrls,
  ];
}

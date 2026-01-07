import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

// Escape HTML special characters to prevent XSS
function escapeHtml(text: string | null): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Custom renderer to add lazy loading to images
const renderer = new marked.Renderer();
renderer.image = function({ href, title, text }) {
  const safeHref = escapeHtml(href);
  const safeAlt = escapeHtml(text);
  const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
  return `<img src="${safeHref}" alt="${safeAlt}"${titleAttr} loading="lazy">`;
};
marked.use({ renderer });

export function getAllArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map(file => file.replace(/\.md$/, ''));
}

export async function getArticleBySlug(slug: string) {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = await marked(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      image: data.image,
      readingTime: data.readingTime,
      tags: data.tags || [],
      description: data.description || "",
      contentHtml,
    };
  } catch (e) {
    console.error(`Error fetching article with slug "${slug}":`, e);
    return null;
  }
}

export async function getAllArticles() {
  const slugs = getAllArticleSlugs();
  const articles = await Promise.all(
    slugs.map(async slug => {
      const article = await getArticleBySlug(slug);
      if (article) {
        return {
          slug: article.slug,
          title: article.title,
          date: article.date,
          image: article.image,
          readingTime: article.readingTime,
          description: article.description || "",
          tags: article.tags || [],  
        };
      }
      return null;
    })
  );

  return articles.filter((a): a is NonNullable<typeof a> => a !== null);
}

export async function getRandomArticles(excludeSlug: string, count: number = 3) {
  const allArticles = await getAllArticles();
  const filteredArticles = allArticles.filter(article => article.slug !== excludeSlug);
  
  // Shuffle array using Fisher-Yates algorithm
  for (let i = filteredArticles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredArticles[i], filteredArticles[j]] = [filteredArticles[j], filteredArticles[i]];
  }
  
  return filteredArticles.slice(0, count);
}

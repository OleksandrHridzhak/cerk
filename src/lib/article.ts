import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map(file => file.replace(/\.md$/, ''));
}

export async function getArticleBySlug(slug: string) {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = marked(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      image: data.image,
      readingTime: data.readingTime,
      contentHtml,
    };
  } catch (e) {
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
        };
      }
      return null;
    })
  );
  // фільтруємо null-и, щоб TS не скиглив
  return articles.filter((a): a is NonNullable<typeof a> => a !== null);
}

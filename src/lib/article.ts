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
    return null; // або кидай кастомну помилку
  }
}


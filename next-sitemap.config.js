import fs from 'fs';
import path from 'path';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

function getAllArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map(file => file.replace(/\.md$/, ''));
}

const nextSitemapConfig = {
  siteUrl: 'https://cerk.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  // Generate additional paths for all articles
  additionalPaths: async (config) => {
    const slugs = getAllArticleSlugs();
    return slugs.map(slug => ({
      loc: `/article/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    }));
  },

  transform: async (config, path) => {
    // Include static pages with proper metadata
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
    };
  },
};

export default nextSitemapConfig;

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

  transform: async (config, path) => {
    const slugs = getAllArticleSlugs().map(slug => `/article/${slug}`);
    const staticPages = ['/', '/about'];

    if (staticPages.includes(path) || slugs.includes(path)) {
      return {
        loc: path,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.7,
      };
    }

    return null;
  },
};

export default nextSitemapConfig;

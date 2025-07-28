const path = require('path');
const fs = require('fs');

const articlesDirectory = path.join(process.cwd(), 'content/articles');

function getAllArticleSlugs() {
  return fs.readdirSync(articlesDirectory).map(file => file.replace(/\.md$/, ''));
}

module.exports = {
  siteUrl: 'https://cerk.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  additionalPaths: async () => {
    const slugs = getAllArticleSlugs();
    return slugs.map(slug => ({
      loc: `/article/${slug}`,
      lastmod: new Date().toISOString(),
    }));
  },
};

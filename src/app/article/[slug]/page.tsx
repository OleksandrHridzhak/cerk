import { getArticleBySlug, getAllArticleSlugs } from '@/lib/article';
import ArticlePhoto from './ArticlePhoto';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}

const ArticlePage = async ({ params }: Props) => {
  const article = await getArticleBySlug(params.slug);
  if (!article) return <div>Article not found</div>;

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
};

export default ArticlePage;

import BlogCard from '@/components/BlogCard/BlogCard';

type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  image: string;
  description: string;
};

type Props = {
  articles: Article[];
};

export default function RelatedArticles({ articles }: Props) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-c text-center mb-6">
        Read More
      </h2>
      <div className="flex flex-col gap-3">
        {articles.map((article) => (
          <BlogCard
            key={article.slug}
            title={article.title}
            date={article.date}
            readingTime={article.readingTime}
            imageUrl={article.image}
            description={article.description}
            href={`/article/${article.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

import { getAllArticles } from '@/lib/article'; // свій шлях постав
import CategoryNav from './home/CategoryNav';
import BlogCard from '@/components/BlogCard/BlogCard';

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="">
      <blockquote className="text-center text-gray-c text-2xl sm:text-3xl md:text-4xl md:py-3 font-bold  mx-auto my-10 px-2" >
        “I don’t like it, because<br/> it's boring”
      </blockquote>
      <CategoryNav />
      <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4">
        {articles.map(({ slug, title, date, readingTime, image }) => (
          <BlogCard
            key={slug}
            title={title}
            date={date}
            readingTime={readingTime}
            imageUrl={image}
            href={`/article/${slug}`}
          />
        ))}
      </div>
    </div>
  );
}

import { getAllArticles } from '@/lib/article'; 
import ArticleList from '@/app/Home/ArticleList';

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="">
      <h1 className="text-center text-gray-c text-2xl sm:text-3xl md:text-4xl md:py-3 font-bold  mx-auto my-10 px-2" >
        “I don&apos;t like it because<br/> it&apos;s boring”
      </h1>
      <ArticleList articles={articles} />
    </div>
  );
}

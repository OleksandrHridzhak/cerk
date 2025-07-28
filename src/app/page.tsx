import { getAllArticles } from '@/lib/article'; 
import ArticleList from './home/ArticleList'; 

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="">
      <blockquote className="text-center text-gray-c text-2xl sm:text-3xl md:text-4xl md:py-3 font-bold  mx-auto my-10 px-2" >
        “I don’t like it because<br/> it's boring”
      </blockquote>
      <ArticleList articles={articles} />
    </div>
  );
}

'use client';
import CategoryNav from './home/CategoryNav';
import BlogCard from '@/components/BlogCard/BlogCard';

export default function Home() {
  return (
    <div className="">
      <blockquote className="text-center text-gray-c text-2xl sm:text-3xl md:text-4xl md:py-3 font-bold  mx-auto my-10 px-2" >
        “I don’t like it, because<br/> it's boring”
      </blockquote>
      <CategoryNav />
      <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4">
        <BlogCard
          title="Understanding React Hooks"
          date="March 15, 2023"
          readingTime="5 min read"
          imageUrl="/ex.jpg"
        />
        <BlogCard
          title="Next.js for Beginners"
          date="April 10, 2023"
          readingTime="7 min read"
          imageUrl="/ex.jpg"
        />
        <BlogCard
          title="CSS Grid Layout Guide"
          date="May 5, 2023"
          readingTime="6 min read"
          imageUrl="/ex.jpg"
        />
        </div>
    </div>
  );
}

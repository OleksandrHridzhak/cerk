'use client';
import CategoryNav from './Home/CategoryNav';


export default function Home() {
  return (
    <div className="">
      <blockquote className="text-center text-grey-c text-2xl sm:text-3xl md:text-4xl md:py-3 font-bold  mx-auto my-10 px-2" >
        “I don’t like it, because<br/> it's boring”
      </blockquote>
      <CategoryNav />
    </div>
  );
}

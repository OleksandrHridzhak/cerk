import React from 'react';
type ArticleInfoProps = {
  title: string;
  date: string;
  readingTime: string;
};

const ArticleInfo: React.FC<ArticleInfoProps> = ({ title, date, readingTime }) => (
  <div className="mx-auto max-w-2xl flex flex-col gap-2 justify-center items-center px-4 py-4 md:py-9">
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-c">
      {title}
    </h1>
    <p className="mt-2 text-sm md:text-md text-gray-500">
      {date} • {readingTime}
    </p>
  </div>
);

export default ArticleInfo;

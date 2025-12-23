import React from 'react';

type ArticleInfoProps = {
  title: string;
  date: string;
  readingTime: string;
};

function parseToISODate(dateStr: string): string {
  // Parse dates like "23 August 2025" or "3 December 2025"
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return dateStr;
  }
  return date.toISOString().split('T')[0];
}

const ArticleInfo: React.FC<ArticleInfoProps> = ({ title, date, readingTime }) => (
  <div
    className="mx-auto max-w-2xl flex flex-col gap-2 justify-center items-center px-4 py-8 md:py-9"
    role="contentinfo"
    aria-label="Article info section"
    itemScope
    itemType="http://schema.org/Article"
  >
    <h1
      className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-c"
      itemProp="headline"
    >
      {title}
    </h1>
    <p
      className="mt-2 text-sm md:text-md text-gray-500"
      aria-label={`Published on ${date}, estimated reading time ${readingTime}`}
    >
      <time itemProp="datePublished" dateTime={parseToISODate(date)}>
        {date}
      </time>{' '}
      • <span itemProp="timeRequired">{readingTime}</span>
    </p>
  </div>
);

export default ArticleInfo;

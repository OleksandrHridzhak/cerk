"use client";
import "./articleBody.css";
import React from "react";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  doc.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
    
  });

  const processedContent = doc.body.innerHTML;

  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="article-body max-w-4xl mx-auto py-6 prose prose-slate dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

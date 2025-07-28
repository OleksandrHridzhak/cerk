"use client";
import "./articleBody.css"; // Assuming you have some styles for the article body
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    doc.querySelectorAll("img").forEach(img => {
      img.loading = "lazy";
    });

    setHtml(doc.body.innerHTML);
  }, [content]);

  return (
    <article
      className="article-body max-w-4xl mx-auto py-6 prose prose-slate dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

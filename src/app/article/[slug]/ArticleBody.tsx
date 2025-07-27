"use client";

import React from "react";
import "./articleBody.css";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <div
      className="article-body max-w-4xl mx-auto py-6 prose prose-slate dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

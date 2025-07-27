"use client";

import React from "react";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-6 prose prose-slate dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

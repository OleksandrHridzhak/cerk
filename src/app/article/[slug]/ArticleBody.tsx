import "./articleBody.css";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <article
      className="article-body max-w-4xl mx-auto py-6 prose prose-slate dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

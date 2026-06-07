"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Components } from "react-markdown";
import { ZoomableMarkdownImage } from "./ZoomableMarkdownImage";

const markdownComponents: Components = {
  img: ({ src, alt }) => <ZoomableMarkdownImage src={src} alt={alt} />,
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");

    return (
      <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} {...props}>
        {children}
      </a>
    );
  },
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className ?? "");
    const code = String(children).replace(/\n$/, "");

    if (match) {
      return (
        <SyntaxHighlighter
          PreTag="div"
          language={match[1]}
          style={oneDark}
          customStyle={{ borderRadius: "1rem", margin: "1.5rem 0", padding: "1rem" }}
        >
          {code}
        </SyntaxHighlighter>
      );
    }

    return (
      <code className="rounded bg-stone-200/70 px-1.5 py-0.5 text-sm text-stone-900 dark:bg-stone-800 dark:text-stone-100" {...props}>
        {children}
      </code>
    );
  },
};

/**
 * 使用 react-markdown 渲染文章正文，支持 GFM、prose 排版、图片放大和代码块高亮。
 */
export function MarkdownContent({ content }: { content: string }) {
  return (
    <article className="prose prose-stone max-w-none leading-8 dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-stone-800 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-stone-950 dark:prose-a:text-stone-200 dark:hover:prose-a:text-white prose-blockquote:border-stone-300 prose-blockquote:text-stone-600 dark:prose-blockquote:border-stone-700 dark:prose-blockquote:text-stone-300 prose-pre:bg-transparent prose-pre:p-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

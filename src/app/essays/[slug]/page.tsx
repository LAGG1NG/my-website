import Link from "next/link";
import { notFound } from "next/navigation";
import { EssayNavigation } from "@/components/essays/EssayNavigation";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { Tag } from "@/components/ui/Tag";
import { getAdjacentEssays, getAllEssays, getEssayBySlug, getPageTitle } from "@/lib/content";
import { formatDate } from "@/lib/date";

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const essay = getEssayBySlug(params.slug);

  if (!essay) {
    return {};
  }

  return {
    title: getPageTitle(essay.title),
    description: essay.excerpt,
  };
}

export default function EssayDetailPage({ params }: { params: { slug: string } }) {
  const essay = getEssayBySlug(params.slug);

  if (!essay) {
    notFound();
  }

  const { previous, next } = getAdjacentEssays(essay.slug);

  return (
    <section className="mx-auto max-w-3xl">
      <Link href="/essays" className="mb-8 inline-flex text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-100">
        ← 返回文章列表
      </Link>

      <header className="mb-10 border-b border-stone-200 pb-10 dark:border-stone-800">
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
          <time dateTime={essay.date}>{formatDate(essay.date)}</time>
          {essay.updated ? <span>更新于 {formatDate(essay.updated)}</span> : null}
        </div>
        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-stone-950 dark:text-stone-50 sm:text-5xl">
          {essay.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-400">{essay.excerpt}</p>
        {essay.tags.length > 0 ? (
          <div className="mt-7 flex flex-wrap gap-2">
            {essay.tags.map((tag) => (
              <Tag key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                {tag}
              </Tag>
            ))}
          </div>
        ) : null}
      </header>

      <MarkdownContent content={essay.content} />
      <EssayNavigation previous={previous} next={next} />
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { EssayNavigation } from "@/components/essays/EssayNavigation";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { Card } from "@/components/ui/Card";
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
      <Link href="/essays" className="mb-8 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
        ← 返回文章列表
      </Link>

      <Card as="header" padding="lg" className="mb-10 rounded-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
          <time dateTime={essay.date}>{formatDate(essay.date)}</time>
          {essay.updated ? <span>更新于 {formatDate(essay.updated)}</span> : null}
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-950 dark:text-white sm:text-5xl">
          {essay.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">{essay.excerpt}</p>
        {essay.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {essay.tags.map((tag) => (
              <Tag key={tag} href={`/essays?tag=${encodeURIComponent(tag)}`}>
                {tag}
              </Tag>
            ))}
          </div>
        ) : null}
      </Card>

      <MarkdownContent content={essay.content} />
      <EssayNavigation previous={previous} next={next} />
    </section>
  );
}

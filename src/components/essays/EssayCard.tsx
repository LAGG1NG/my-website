import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { EssayMeta } from "@/lib/content";
import { formatDate } from "@/lib/date";

/**
 * 随笔卡片，首页和随笔列表页共用。
 */
export function EssayCard({ essay }: { essay: EssayMeta }) {
  return (
    <article className="py-6 first:pt-0">
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
        <time dateTime={essay.date}>{formatDate(essay.date)}</time>
        {essay.tags.length > 0 ? <span className="text-stone-300 dark:text-stone-700">·</span> : null}
        <div className="flex flex-wrap gap-2">
          {essay.tags.map((tag) => (
            <Tag key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-50">
        <Link href={`/essays/${essay.slug}`} className="transition-colors hover:text-stone-600 dark:hover:text-stone-300">
          {essay.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{essay.excerpt}</p>
    </article>
  );
}

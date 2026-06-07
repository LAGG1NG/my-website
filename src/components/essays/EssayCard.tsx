import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { EssayMeta } from "@/lib/content";
import { formatDate } from "@/lib/date";

/**
 * 随笔卡片，首页和随笔列表页共用。
 */
export function EssayCard({ essay }: { essay: EssayMeta }) {
  return (
    <Card as="article" interactive>
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
        <time dateTime={essay.date}>{formatDate(essay.date)}</time>
        {essay.tags.length > 0 ? <span>·</span> : null}
        <div className="flex flex-wrap gap-2">
          {essay.tags.map((tag) => (
            <Tag key={tag} href={`/essays?tag=${encodeURIComponent(tag)}`}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-stone-950 dark:text-white">
        <Link href={`/essays/${essay.slug}`} className="transition hover:text-blue-600 dark:hover:text-blue-300">
          {essay.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{essay.excerpt}</p>
    </Card>
  );
}

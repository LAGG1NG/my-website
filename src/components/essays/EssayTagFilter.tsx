import Link from "next/link";
import type { EssayTagStat } from "@/lib/content";

type EssayTagFilterProps = {
  tags: EssayTagStat[];
  selectedTag?: string;
};

function pillClass(active: boolean) {
  return active
    ? "rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white dark:bg-blue-500"
    : "rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-900";
}

export function EssayTagFilter({ tags, selectedTag }: EssayTagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm dark:border-blue-950/60 dark:bg-stone-900">
      <Link href="/essays" className={pillClass(!selectedTag)}>
        全部
      </Link>
      {tags.map(({ tag, count }) => (
        <Link key={tag} href={`/essays?tag=${encodeURIComponent(tag)}`} className={pillClass(selectedTag === tag)}>
          {tag} {count}
        </Link>
      ))}
    </div>
  );
}

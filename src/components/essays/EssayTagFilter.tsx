import Link from "next/link";
import type { EssayTagStat } from "@/lib/content";

type EssayTagFilterProps = {
  tags: EssayTagStat[];
  selectedTag?: string;
};

function pillClass(active: boolean) {
  return active
    ? "rounded-md bg-stone-900 px-3 py-1.5 text-sm font-medium text-stone-50 dark:bg-stone-100 dark:text-stone-950"
    : "rounded-md border border-stone-200 px-3 py-1.5 text-sm text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-stone-100";
}

export function EssayTagFilter({ tags, selectedTag }: EssayTagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 border-y border-stone-200 py-4 dark:border-stone-800">
      <Link href="/essays" className={pillClass(!selectedTag)}>
        全部
      </Link>
      {tags.map(({ tag, count }) => (
        <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className={pillClass(selectedTag === tag)}>
          {tag} {count}
        </Link>
      ))}
    </div>
  );
}

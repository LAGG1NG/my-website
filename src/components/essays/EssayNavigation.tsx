import Link from "next/link";
import type { EssayMeta } from "@/lib/content";

type EssayNavigationProps = {
  previous: EssayMeta | null;
  next: EssayMeta | null;
};

export function EssayNavigation({ previous, next }: EssayNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="mt-12 grid gap-4 border-t border-stone-200 pt-8 dark:border-stone-800 sm:grid-cols-2" aria-label="上一篇和下一篇文章">
      {previous ? (
        <Link href={`/essays/${previous.slug}`} className="rounded-2xl border border-blue-100 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm dark:border-blue-950/60 dark:bg-stone-900 dark:hover:border-blue-800">
          <span className="text-sm text-stone-500 dark:text-stone-400">上一篇</span>
          <span className="mt-2 block font-semibold text-stone-950 dark:text-white">{previous.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/essays/${next.slug}`} className="rounded-2xl border border-blue-100 bg-white p-5 text-right transition hover:border-blue-200 hover:shadow-sm dark:border-blue-950/60 dark:bg-stone-900 dark:hover:border-blue-800">
          <span className="text-sm text-stone-500 dark:text-stone-400">下一篇</span>
          <span className="mt-2 block font-semibold text-stone-950 dark:text-white">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}

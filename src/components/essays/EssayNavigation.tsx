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
    <nav className="mt-12 grid gap-6 border-t border-stone-200 pt-8 dark:border-stone-800 sm:grid-cols-2" aria-label="上一篇和下一篇文章">
      {previous ? (
        <Link href={`/essays/${previous.slug}`} className="group block">
          <span className="text-sm text-stone-500 dark:text-stone-400">上一篇</span>
          <span className="mt-2 block font-medium text-stone-950 transition-colors group-hover:text-stone-600 dark:text-stone-50 dark:group-hover:text-stone-300">{previous.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/essays/${next.slug}`} className="group block text-right">
          <span className="text-sm text-stone-500 dark:text-stone-400">下一篇</span>
          <span className="mt-2 block font-medium text-stone-950 transition-colors group-hover:text-stone-600 dark:text-stone-50 dark:group-hover:text-stone-300">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}

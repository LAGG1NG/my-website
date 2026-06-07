import { LinkButton } from "@/components/ui/Button";
import type { SiteConfig } from "@/lib/content";

export function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="grid items-center gap-8 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 shadow-sm dark:border-blue-950 dark:from-stone-900 dark:via-stone-900 dark:to-blue-950/40 sm:p-12 md:grid-cols-[1fr_auto]">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          Personal Blog
        </p>
        <h1 className="text-4xl font-bold leading-tight text-stone-950 dark:text-white sm:text-6xl">{site.author.displayName}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">{site.author.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/essays">阅读随笔</LinkButton>
          <LinkButton href="/about" variant="outline">了解我</LinkButton>
        </div>
      </div>
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600 ring-8 ring-white dark:bg-blue-950 dark:text-blue-200 dark:ring-stone-800 sm:h-40 sm:w-40">
        {site.author.initial}
      </div>
    </section>
  );
}

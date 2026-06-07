import Link from "next/link";
import type { SiteConfig } from "@/lib/content";

export function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="border-b border-stone-200 py-16 dark:border-stone-800 sm:py-24">
      <p className="text-sm text-stone-500 dark:text-stone-400">个人博客</p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 dark:text-stone-50 sm:text-6xl">
        你好，我是{site.author.displayName}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400">{site.author.bio}</p>
      <div className="mt-8 flex gap-5 text-sm font-medium">
        <Link href="/essays" className="text-stone-700 underline-offset-4 hover:text-stone-950 hover:underline dark:text-stone-300 dark:hover:text-stone-50">
          阅读随笔
        </Link>
        <Link href="/about" className="text-stone-500 underline-offset-4 hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-50">
          关于我
        </Link>
      </div>
    </section>
  );
}

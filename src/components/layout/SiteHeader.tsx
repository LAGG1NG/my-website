import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/content";
import { MainNav } from "./MainNav";

export function SiteHeader({ site }: { site: SiteConfig }) {
  return (
    <header className="border-b border-stone-200 bg-stone-50/95 dark:border-stone-800 dark:bg-neutral-950/95">
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-950 transition-colors hover:text-stone-600 dark:text-stone-50 dark:hover:text-stone-300">
          {site.siteName}
        </Link>

        <div className="flex flex-wrap items-center gap-5">
          <MainNav links={site.nav} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

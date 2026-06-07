import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/content";
import { MainNav } from "./MainNav";

export function SiteHeader({ site }: { site: SiteConfig }) {
  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-stone-950 dark:text-white">
          {site.siteName}
        </Link>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <MainNav links={site.nav} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

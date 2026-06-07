import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/content";

export function SiteFooter({ site }: { site: SiteConfig }) {
  const currentYear = new Date().getFullYear();
  const year = site.startYear && site.startYear < currentYear ? `${site.startYear} - ${currentYear}` : `${currentYear}`;

  return (
    <footer className="border-t border-stone-200 bg-white/70 dark:border-stone-800 dark:bg-stone-900/50">
      <Container className="flex flex-col gap-3 py-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between dark:text-stone-400">
        <p>© {year} {site.author.name}</p>
        <div className="flex flex-wrap gap-3" aria-label="社交媒体链接">
          {site.social.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className="rounded-full border border-stone-300 px-2 py-1 transition hover:border-stone-500 hover:text-stone-950 dark:border-stone-700 dark:hover:border-stone-400 dark:hover:text-white"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/content";

export function SiteFooter({ site }: { site: SiteConfig }) {
  const currentYear = new Date().getFullYear();
  const year = site.startYear && site.startYear < currentYear ? `${site.startYear} - ${currentYear}` : `${currentYear}`;

  return (
    <footer className="mt-12 border-t border-stone-200 dark:border-stone-800">
      <Container className="flex flex-col gap-3 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between dark:text-stone-400">
        <p>© {year} {site.author.name}</p>
        <div className="flex flex-wrap gap-4" aria-label="社交媒体链接">
          {site.social.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className="underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:hover:text-stone-100"
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

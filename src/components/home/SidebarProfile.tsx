import { Card } from "@/components/ui/Card";
import type { SiteConfig } from "@/lib/content";

export function SidebarProfile({ site }: { site: SiteConfig }) {
  return (
    <Card as="section">
      <h3 className="text-lg font-semibold text-stone-950 dark:text-white">关于{site.author.displayName}</h3>
      <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{site.author.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {site.social.map((link) => (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-stone-700 dark:text-stone-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </Card>
  );
}

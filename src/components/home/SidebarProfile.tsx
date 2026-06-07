import { Card } from "@/components/ui/Card";
import type { SiteConfig } from "@/lib/content";

export function SidebarProfile({ site }: { site: SiteConfig }) {
  return (
    <Card as="section">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 text-sm font-medium text-stone-700 dark:border-stone-700 dark:text-stone-300">
          {site.author.initial}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-stone-950 dark:text-stone-50">关于{site.author.displayName}</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400">{site.author.role}</p>
        </div>
      </div>
      <p className="mt-4 leading-7 text-stone-600 dark:text-stone-400">{site.author.bio}</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {site.social.map((link) => (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-100"
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

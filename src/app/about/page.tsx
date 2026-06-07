import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAboutContent, getSiteConfig } from "@/lib/content";

export default function AboutPage() {
  const about = getAboutContent();
  const site = getSiteConfig();

  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <PageHeader eyebrow="About" title={`关于${site.author.displayName}`} description={site.author.bio} />
      <Card padding="lg" className="rounded-3xl">
        <MarkdownContent content={about.content} />
      </Card>
    </section>
  );
}

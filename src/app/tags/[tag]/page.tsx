import { notFound } from "next/navigation";
import { EssayList } from "@/components/essays/EssayList";
import { EssayTagFilter } from "@/components/essays/EssayTagFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllEssays, getEssayTagStats, getPageTitle } from "@/lib/content";

type TagPageProps = {
  params: {
    tag: string;
  };
};

export function generateStaticParams() {
  return getEssayTagStats().map(({ tag }) => ({ tag: encodeURIComponent(tag) }));
}

export function generateMetadata({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);

  return {
    title: getPageTitle(`标签：${tag}`),
    description: `阅读标签「${tag}」下的所有随笔。`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const selectedTag = decodeURIComponent(params.tag);
  const tags = getEssayTagStats();
  const hasTag = tags.some(({ tag }) => tag === selectedTag);

  if (!hasTag) {
    notFound();
  }

  const essays = getAllEssays().filter((essay) => essay.tags.includes(selectedTag));

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Tag"
        title={`标签：${selectedTag}`}
        description={`这里收录了 ${essays.length} 篇与「${selectedTag}」相关的随笔。`}
      />
      <EssayTagFilter tags={tags} selectedTag={selectedTag} />
      <EssayList essays={essays} emptyDescription="这个标签下暂时没有文章。" />
    </section>
  );
}

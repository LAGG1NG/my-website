import { EssayList } from "@/components/essays/EssayList";
import { EssayTagFilter } from "@/components/essays/EssayTagFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllEssays, getEssayTagStats } from "@/lib/content";

export default function EssaysPage({ searchParams }: { searchParams?: { tag?: string } }) {
  const selectedTag = searchParams?.tag;
  const tags = getEssayTagStats();
  const essays = getAllEssays().filter((essay) => !selectedTag || essay.tags.includes(selectedTag));

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Essays"
        title="文章列表"
        description={selectedTag ? `正在阅读标签「${selectedTag}」下的 ${essays.length} 篇随笔。` : "按标签筛选随笔，阅读技术笔记、项目复盘和日常思考。"}
      />
      <EssayTagFilter tags={tags} selectedTag={selectedTag} />
      <EssayList essays={essays} emptyDescription="没有找到匹配当前筛选条件的文章。" />
    </section>
  );
}

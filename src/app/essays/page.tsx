import { EssayList } from "@/components/essays/EssayList";
import { EssayTagFilter } from "@/components/essays/EssayTagFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllEssays, getEssayTagStats } from "@/lib/content";

export default function EssaysPage() {
  const tags = getEssayTagStats();
  const essays = getAllEssays();

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Essays"
        title="文章列表"
        description="按时间倒序阅读技术笔记、项目复盘和日常思考。你也可以通过标签进入专题归档。"
      />
      <EssayTagFilter tags={tags} />
      <EssayList essays={essays} emptyDescription="在 content/essays 中添加 MDX 文件后，这里会显示文章列表。" />
    </section>
  );
}

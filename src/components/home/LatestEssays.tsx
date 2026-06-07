import { EssayList } from "@/components/essays/EssayList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { EssayMeta } from "@/lib/content";

export function LatestEssays({ essays }: { essays: EssayMeta[] }) {
  return (
    <section className="space-y-5">
      <SectionHeader eyebrow="Latest" title="最新随笔" href="/essays" linkLabel="查看全部 →" />
      <EssayList essays={essays} emptyDescription="在 content/essays 中添加 MDX 文件后，这里会显示最新文章。" />
    </section>
  );
}

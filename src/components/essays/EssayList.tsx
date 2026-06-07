import { EmptyState } from "@/components/ui/EmptyState";
import type { EssayMeta } from "@/lib/content";
import { EssayCard } from "./EssayCard";

type EssayListProps = {
  essays: EssayMeta[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function EssayList({ essays, emptyTitle = "暂无文章", emptyDescription }: EssayListProps) {
  if (essays.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="divide-y divide-stone-200 dark:divide-stone-800">
      {essays.map((essay) => (
        <EssayCard key={essay.slug} essay={essay} />
      ))}
    </div>
  );
}

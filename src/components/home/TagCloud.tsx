import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { EssayTagStat } from "@/lib/content";

export function TagCloud({ tags }: { tags: EssayTagStat[] }) {
  return (
    <Card as="section">
      <h3 className="text-lg font-semibold text-stone-950 dark:text-white">常用标签</h3>
      {tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(({ tag, count }) => (
            <Tag key={tag} href={`/essays?tag=${encodeURIComponent(tag)}`} count={count}>
              {tag}
            </Tag>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">暂无标签。</p>
      )}
    </Card>
  );
}

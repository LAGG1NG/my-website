import { Tag } from "@/components/ui/Tag";
import type { EssayTagStat } from "@/lib/content";

export function TagCloud({ tags }: { tags: EssayTagStat[] }) {
  return (
    <section className="border-t border-stone-200 pt-6 dark:border-stone-800">
      <h3 className="text-base font-medium text-stone-950 dark:text-stone-50">常用标签</h3>
      {tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(({ tag, count }) => (
            <Tag key={tag} href={`/tags/${encodeURIComponent(tag)}`} count={count}>
              {tag}
            </Tag>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">暂无标签。</p>
      )}
    </section>
  );
}

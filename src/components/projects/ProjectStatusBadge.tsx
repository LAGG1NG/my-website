import type { Project } from "@/lib/content";

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  active: "进行中",
  archived: "已归档",
  experiment: "实验",
  maintained: "维护中",
};

export function ProjectStatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) {
    return null;
  }

  return (
    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
      {statusLabel[status]}
    </span>
  );
}

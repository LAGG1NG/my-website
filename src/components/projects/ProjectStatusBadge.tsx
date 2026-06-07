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

  return <span className="text-sm text-stone-500 dark:text-stone-400">{statusLabel[status]}</span>;
}

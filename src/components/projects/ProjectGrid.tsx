import { EmptyState } from "@/components/ui/EmptyState";
import type { Project } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  emptyDescription?: string;
};

export function ProjectGrid({ projects, emptyDescription }: ProjectGridProps) {
  if (projects.length === 0) {
    return <EmptyState title="暂无项目" description={emptyDescription} />;
  }

  return (
    <div className="divide-y divide-stone-200 dark:divide-stone-800">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

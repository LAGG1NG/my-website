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
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

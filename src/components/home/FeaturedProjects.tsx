import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Project } from "@/lib/content";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="space-y-6">
      <SectionHeader title="项目记录" href="/projects" linkLabel="查看全部" />
      <ProjectGrid projects={projects} emptyDescription="在 content/projects/projects.json 中标记 featured 项目后，这里会显示精选项目。" />
    </section>
  );
}

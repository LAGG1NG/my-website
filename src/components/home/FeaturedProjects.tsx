import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Project } from "@/lib/content";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="space-y-5">
      <SectionHeader eyebrow="Featured" title="精选项目" href="/projects" linkLabel="查看项目 →" />
      <ProjectGrid projects={projects} emptyDescription="在 content/projects/projects.json 中标记 featured 项目后，这里会显示精选项目。" />
    </section>
  );
}

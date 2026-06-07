import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Projects"
        title="我的项目"
        description="这里收集我做过或正在维护的项目。点击卡片进入详情页，查看项目背景、技术栈、在线演示或源码链接。"
      />
      <ProjectGrid projects={projects} emptyDescription="在 content/projects/projects.json 中添加项目后，这里会显示项目展示。" />
    </section>
  );
}

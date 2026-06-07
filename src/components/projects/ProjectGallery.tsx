import type { Project } from "@/lib/content";
import { ProjectGrid } from "./ProjectGrid";

/**
 * 兼容旧引用的项目展示组件。项目主体验已改为点击卡片进入详情页。
 */
export function ProjectGallery({ projects }: { projects: Project[] }) {
  return <ProjectGrid projects={projects} />;
}

import { LinkButton } from "@/components/ui/Button";
import type { Project } from "@/lib/content";

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.demoUrl ? (
        <LinkButton href={project.demoUrl} external={project.demoUrl.startsWith("http")}>
          在线演示
        </LinkButton>
      ) : null}
      {project.githubUrl ? (
        <LinkButton href={project.githubUrl} variant="outline" external={project.githubUrl.startsWith("http")}>
          GitHub
        </LinkButton>
      ) : null}
    </div>
  );
}

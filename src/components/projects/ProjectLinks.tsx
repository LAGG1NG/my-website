import Link from "next/link";
import type { Project } from "@/lib/content";

function isRealLink(href?: string) {
  return Boolean(href && href !== "#");
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {isRealLink(project.demoUrl) ? (
        <Link href={project.demoUrl!} className="text-sm font-medium text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline dark:text-stone-300 dark:hover:text-stone-50" target={project.demoUrl!.startsWith("http") ? "_blank" : undefined} rel={project.demoUrl!.startsWith("http") ? "noreferrer" : undefined}>
          在线演示
        </Link>
      ) : null}
      {isRealLink(project.githubUrl) ? (
        <Link href={project.githubUrl!} className="text-sm font-medium text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline dark:text-stone-300 dark:hover:text-stone-50" target={project.githubUrl!.startsWith("http") ? "_blank" : undefined} rel={project.githubUrl!.startsWith("http") ? "noreferrer" : undefined}>
          GitHub
        </Link>
      ) : null}
    </div>
  );
}

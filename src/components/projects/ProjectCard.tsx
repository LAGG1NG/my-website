import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/content";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="py-6 first:pt-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-stone-950 dark:text-stone-50">
            <Link href={`/projects/${project.id}`} className="transition-colors hover:text-stone-600 dark:hover:text-stone-300">
              {project.name}
            </Link>
          </h2>
          {project.subtitle ? <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{project.subtitle}</p> : null}
        </div>
        <ProjectStatusBadge status={project.status} />
      </div>
      <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}

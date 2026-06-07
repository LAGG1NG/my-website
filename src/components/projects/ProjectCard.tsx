import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/content";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" padding="none" interactive className="overflow-hidden">
      <Link href={`/projects/${project.id}`} className="group block">
        {project.coverImage ? (
          <div className="relative aspect-video bg-stone-100 dark:bg-stone-800">
            <Image src={project.coverImage} alt={`${project.name} 封面图`} fill className="object-cover transition group-hover:scale-105" sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-50 to-stone-100 text-sm font-medium text-blue-700 dark:from-blue-950/50 dark:to-stone-800 dark:text-blue-200">
            {project.name}
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-stone-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
              {project.name}
            </h2>
            <ProjectStatusBadge status={project.status} />
          </div>
          {project.subtitle ? <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{project.subtitle}</p> : null}
          <p className="mt-3 line-clamp-3 leading-7 text-stone-600 dark:text-stone-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}

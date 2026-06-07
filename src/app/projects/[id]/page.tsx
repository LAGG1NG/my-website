import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { getAllProjects, getPageTitle, getProjectById } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    return {};
  }

  return {
    title: getPageTitle(project.name),
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <Link href="/projects" className="inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
        ← 返回项目列表
      </Link>

      <Card padding="none" className="overflow-hidden rounded-3xl border-stone-200 dark:border-stone-800">
        {project.coverImage ? (
          <div className="relative aspect-video bg-stone-100 dark:bg-stone-800">
            <Image src={project.coverImage} alt={`${project.name} 封面图`} fill className="object-cover" sizes="(min-width: 1024px) 896px, 100vw" />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-50 to-stone-100 text-2xl font-bold text-blue-700 dark:from-blue-950/50 dark:to-stone-800 dark:text-blue-200">
            {project.name}
          </div>
        )}

        <div className="p-8 sm:p-10">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">Project</p>
            <ProjectStatusBadge status={project.status} />
          </div>
          <h1 className="text-3xl font-bold text-stone-950 dark:text-white sm:text-5xl">{project.name}</h1>
          {project.subtitle ? <p className="mt-3 text-lg text-stone-500 dark:text-stone-400">{project.subtitle}</p> : null}
          <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {project.stack && project.stack.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </Card>

      {project.longDescription ? (
        <Card as="section" padding="lg" className="prose prose-stone max-w-none dark:prose-invert">
          <h2>项目说明</h2>
          <p>{project.longDescription}</p>
        </Card>
      ) : null}
    </section>
  );
}

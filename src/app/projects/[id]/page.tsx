import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
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
    <section className="mx-auto max-w-3xl space-y-10">
      <Link href="/projects" className="inline-flex text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-100">
        ← 返回项目列表
      </Link>

      <header className="border-b border-stone-200 pb-10 dark:border-stone-800">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-stone-500 dark:text-stone-400">项目记录</span>
          <ProjectStatusBadge status={project.status} />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 sm:text-5xl">{project.name}</h1>
        {project.subtitle ? <p className="mt-3 text-lg text-stone-500 dark:text-stone-400">{project.subtitle}</p> : null}
        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-8">
          <ProjectLinks project={project} />
        </div>
      </header>

      {project.coverImage ? (
        <div className="relative aspect-video overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900">
          <Image src={project.coverImage} alt={`${project.name} 封面图`} fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
        </div>
      ) : null}

      {project.stack && project.stack.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-base font-medium text-stone-950 dark:text-stone-50">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="text-sm text-stone-500 dark:text-stone-400">
                {item}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {project.longDescription ? (
        <section className="prose prose-stone max-w-none border-t border-stone-200 pt-8 dark:prose-invert dark:border-stone-800 prose-headings:font-semibold prose-headings:tracking-tight">
          <h2>项目说明</h2>
          <p>{project.longDescription}</p>
        </section>
      ) : null}
    </section>
  );
}

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { LatestEssays } from "@/components/home/LatestEssays";
import { TagCloud } from "@/components/home/TagCloud";
import { getAllEssays, getEssayTagStats, getFeaturedProjects, getSiteConfig } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const essays = getAllEssays();
  const latestEssays = essays.slice(0, 5);
  const tags = getEssayTagStats();
  const featuredProjects = getFeaturedProjects(2);

  return (
    <div className="mx-auto max-w-3xl space-y-16">
      <Hero site={site} />

      <main className="space-y-16">
        <LatestEssays essays={latestEssays} />
        <FeaturedProjects projects={featuredProjects} />
        <TagCloud tags={tags} />
      </main>
    </div>
  );
}

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { LatestEssays } from "@/components/home/LatestEssays";
import { SidebarProfile } from "@/components/home/SidebarProfile";
import { TagCloud } from "@/components/home/TagCloud";
import { getAllEssays, getEssayTagStats, getFeaturedProjects, getSiteConfig } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const latestEssays = getAllEssays().slice(0, 5);
  const tags = getEssayTagStats();
  const featuredProjects = getFeaturedProjects(3);

  return (
    <div className="space-y-12">
      <Hero site={site} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <main className="space-y-12">
          <LatestEssays essays={latestEssays} />
          <FeaturedProjects projects={featuredProjects} />
        </main>

        <aside className="space-y-5">
          <SidebarProfile site={site} />
          <TagCloud tags={tags} />
        </aside>
      </div>
    </div>
  );
}

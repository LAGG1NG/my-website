import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");
const essaysDirectory = path.join(contentDirectory, "essays");
const projectsFilePath = path.join(contentDirectory, "projects", "projects.json");
const aboutFilePath = path.join(contentDirectory, "about.mdx");
const siteFilePath = path.join(contentDirectory, "site.json");

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  type: "github" | "email" | "rss" | "weibo" | "x" | "custom";
};

export type SiteConfig = {
  siteName: string;
  titleTemplate: string;
  description: string;
  language: string;
  startYear: number;
  author: {
    name: string;
    displayName: string;
    initial: string;
    role: string;
    bio: string;
    location?: string;
  };
  nav: NavLink[];
  social: SocialLink[];
};

export type EssayMeta = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
  draft: boolean;
};

export type Essay = EssayMeta & {
  content: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  stack?: string[];
  coverImage?: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: "active" | "archived" | "experiment" | "maintained";
  startDate?: string;
  endDate?: string;
};

export type AboutContent = {
  content: string;
};

export type EssayTagStat = {
  tag: string;
  count: number;
};

type EssayFrontMatter = {
  title?: string;
  date?: string;
  updated?: string;
  tags?: string[];
  excerpt?: string;
  featured?: boolean;
  draft?: boolean;
};

const defaultSiteConfig: SiteConfig = {
  siteName: "XX的博客",
  titleTemplate: "%s | XX的博客",
  description: "一个传统博客风格的个人网站",
  language: "zh-CN",
  startYear: 2024,
  author: {
    name: "我的名字",
    displayName: "张三",
    initial: "张",
    role: "全栈开发者",
    bio: "全栈开发者，热爱技术与写作。关注 Web 开发、工程效率和持续写作，喜欢把项目经验整理成可复用的笔记。",
    location: "中国",
  },
  nav: [
    { href: "/", label: "首页" },
    { href: "/essays", label: "随笔" },
    { href: "/projects", label: "项目" },
    { href: "/about", label: "关于" },
  ],
  social: [
    { label: "微博", href: "#", type: "weibo" },
    { label: "GitHub", href: "#", type: "github" },
    { label: "邮箱", href: "mailto:hello@example.com", type: "email" },
  ],
};

function readJsonFile<T>(filePath: string, fallback: T): T {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 从 MDX 文件名推导文章 slug，例如 my-first-post.mdx -> my-first-post。
 */
function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

/**
 * 读取并解析单个文章文件，返回正文和 YAML 头部信息。
 */
function readEssayFile(filename: string): Essay {
  const slug = getSlugFromFilename(filename);
  const filePath = path.join(essaysDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const meta = data as EssayFrontMatter;

  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    updated: meta.updated,
    tags: meta.tags ?? [],
    excerpt: meta.excerpt ?? "",
    featured: meta.featured ?? false,
    draft: meta.draft ?? false,
    content,
  };
}

function getEssayFiles() {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  return fs.readdirSync(essaysDirectory).filter((filename) => filename.endsWith(".mdx"));
}

/**
 * 获取站点配置。
 */
export function getSiteConfig(): SiteConfig {
  const config = readJsonFile<Partial<SiteConfig>>(siteFilePath, {});

  return {
    ...defaultSiteConfig,
    ...config,
    author: {
      ...defaultSiteConfig.author,
      ...config.author,
    },
    nav: config.nav ?? defaultSiteConfig.nav,
    social: config.social ?? defaultSiteConfig.social,
  };
}

/**
 * 按站点配置生成页面标题。
 */
export function getPageTitle(title: string) {
  const site = getSiteConfig();

  return site.titleTemplate.includes("%s") ? site.titleTemplate.replace("%s", title) : `${title} | ${site.siteName}`;
}

/**
 * 获取所有文章，并按日期倒序排列。生产环境会隐藏草稿。
 */
export function getAllEssays(): EssayMeta[] {
  return sortByDateDesc(getEssayFiles().map(readEssayFile))
    .filter((essay) => !isProduction() || !essay.draft)
    .map(({ content: _content, ...meta }) => meta);
}

/**
 * 获取精选文章。
 */
export function getFeaturedEssays(limit?: number): EssayMeta[] {
  const essays = getAllEssays().filter((essay) => essay.featured);

  return typeof limit === "number" ? essays.slice(0, limit) : essays;
}

/**
 * 根据 slug 获取单篇文章的正文和元数据。
 */
export function getEssayBySlug(slug: string): Essay | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(essaysDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const essay = readEssayFile(filename);

  if (isProduction() && essay.draft) {
    return null;
  }

  return essay;
}

/**
 * 获取所有文章标签，并按中文拼音/字母排序。
 */
export function getAllEssayTags(): string[] {
  return getEssayTagStats().map(({ tag }) => tag);
}

/**
 * 获取文章标签及数量。
 */
export function getEssayTagStats(): EssayTagStat[] {
  const counts = getAllEssays().reduce<Map<string, number>>((result, essay) => {
    essay.tags.forEach((tag) => result.set(tag, (result.get(tag) ?? 0) + 1));
    return result;
  }, new Map());

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "zh-CN"));
}

/**
 * 获取当前文章在日期倒序列表中的上一篇和下一篇。
 */
export function getAdjacentEssays(slug: string) {
  const essays = getAllEssays();
  const index = essays.findIndex((essay) => essay.slug === slug);

  return {
    previous: index > 0 ? essays[index - 1] : null,
    next: index >= 0 && index < essays.length - 1 ? essays[index + 1] : null,
  };
}

/**
 * 获取所有项目数据。
 */
export function getAllProjects(): Project[] {
  return readJsonFile<Project[]>(projectsFilePath, []);
}

/**
 * 获取精选项目。
 */
export function getFeaturedProjects(limit?: number): Project[] {
  const projects = getAllProjects().filter((project) => project.featured);

  return typeof limit === "number" ? projects.slice(0, limit) : projects;
}

/**
 * 根据 id 获取单个项目。
 */
export function getProjectById(id: string): Project | null {
  return getAllProjects().find((project) => project.id === id) ?? null;
}

/**
 * 读取关于页 MDX 内容。
 */
export function getAboutContent(): AboutContent {
  if (!fs.existsSync(aboutFilePath)) {
    return {
      content: "# 关于我\n\n这里还没有填写关于页内容。你可以在 `content/about.mdx` 中补充个人介绍。",
    };
  }

  const fileContent = fs.readFileSync(aboutFilePath, "utf8");
  const { content } = matter(fileContent);

  return { content };
}

import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({ eyebrow, title, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold text-stone-950 dark:text-white">{title}</h2>
      </div>
      {href && linkLabel ? (
        <Link href={href} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

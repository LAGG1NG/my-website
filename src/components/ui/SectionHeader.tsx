import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({ eyebrow, title, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-stone-200 pb-3 dark:border-stone-800">
      <div>
        {eyebrow ? (
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-50">{title}</h2>
      </div>
      {href && linkLabel ? (
        <Link href={href} className="text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-100">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

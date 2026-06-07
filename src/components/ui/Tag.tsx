import Link from "next/link";

type TagProps = {
  children: string;
  href?: string;
  active?: boolean;
  count?: number;
};

export function Tag({ children, href, active = false, count }: TagProps) {
  const className = active
    ? "rounded-md bg-stone-900 px-2 py-0.5 text-sm font-medium text-stone-50 dark:bg-stone-100 dark:text-stone-950"
    : "rounded-md border border-stone-200 px-2 py-0.5 text-sm text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-900 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-stone-100";
  const label = count === undefined ? children : `${children} ${count}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}

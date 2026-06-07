import Link from "next/link";

type TagProps = {
  children: string;
  href?: string;
  active?: boolean;
  count?: number;
};

export function Tag({ children, href, active = false, count }: TagProps) {
  const className = active
    ? "rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white dark:bg-blue-500"
    : "rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-900";
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

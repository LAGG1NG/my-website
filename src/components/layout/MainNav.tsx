import Link from "next/link";
import type { NavLink } from "@/lib/content";

export function MainNav({ links }: { links: NavLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

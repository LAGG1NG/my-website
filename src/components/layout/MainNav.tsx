"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/content";

function isActiveLink(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function MainNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-5" aria-label="主导航">
      {links.map((link) => {
        const isActive = isActiveLink(pathname, link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive
              ? "text-sm font-medium text-stone-950 underline underline-offset-8 dark:text-stone-50"
              : "text-sm font-medium text-stone-500 transition-colors hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100"}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",
  outline:
    "border border-stone-300 text-stone-700 hover:border-stone-500 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-400 dark:hover:text-white",
  ghost: "text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200",
};

export function LinkButton({ href, children, variant = "primary", external = false, className = "", ...props }: LinkButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition ${variantClass[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

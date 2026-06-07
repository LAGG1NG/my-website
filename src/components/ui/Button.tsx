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
  primary: "bg-stone-900 text-stone-50 hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-300",
  outline:
    "border border-stone-300 text-stone-700 hover:border-stone-500 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-white",
  ghost: "text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline dark:text-stone-300 dark:hover:text-white",
};

export function LinkButton({ href, children, variant = "primary", external = false, className = "", ...props }: LinkButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${variantClass[variant]} ${className}`;

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

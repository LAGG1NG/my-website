import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const paddingClass = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 sm:p-10",
};

export function Card<T extends ElementType = "div">({
  as,
  children,
  className = "",
  interactive = false,
  padding = "md",
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";
  const interactiveClass = interactive
    ? "transition-colors hover:border-stone-400 dark:hover:border-stone-600"
    : "";

  return (
    <Component
      className={`rounded-xl border border-stone-200 bg-stone-50/60 ${paddingClass[padding]} ${interactiveClass} dark:border-stone-800 dark:bg-neutral-950 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

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
    ? "transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:hover:border-blue-800"
    : "shadow-sm";

  return (
    <Component
      className={`rounded-2xl border border-blue-100 bg-white ${paddingClass[padding]} ${interactiveClass} dark:border-blue-950/60 dark:bg-stone-900 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

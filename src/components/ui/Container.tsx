import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "article" | "wide";
};

const sizeClass = {
  default: "max-w-5xl",
  article: "max-w-3xl",
  wide: "max-w-6xl",
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`mx-auto w-full ${sizeClass[size]} px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

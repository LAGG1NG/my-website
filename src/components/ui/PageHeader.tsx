import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
};

export function PageHeader({ eyebrow, title, description, actions, align = "left" }: PageHeaderProps) {
  const isCentered = align === "center";

  return (
    <header className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          {eyebrow}
        </p>
      ) : null}
      <div className={actions ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" : undefined}>
        <div>
          <h1 className="text-3xl font-bold text-stone-950 dark:text-white sm:text-4xl">{title}</h1>
          {description ? <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">{description}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </header>
  );
}

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
        <p className="mb-3 text-sm text-stone-500 dark:text-stone-400">
          {eyebrow}
        </p>
      ) : null}
      <div className={actions ? "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" : undefined}>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 sm:text-4xl">{title}</h1>
          {description ? <p className="mt-4 max-w-2xl leading-8 text-stone-600 dark:text-stone-400">{description}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </header>
  );
}

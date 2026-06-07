type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center dark:border-stone-700 dark:bg-stone-900">
      <p className="font-medium text-stone-700 dark:text-stone-200">{title}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">{description}</p> : null}
    </div>
  );
}

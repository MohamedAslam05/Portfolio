export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center mb-14">
      <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="reveal mb-7">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.6rem,2.3vw+1rem,2.3rem)] font-semibold">
        {title}
      </h2>
    </div>
  );
}

import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{eyebrow}</p>
        {meta && (
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{meta}</p>
        )}
      </div>
      <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}

import { agenticEdge, skillGroups } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-28 lg:py-36">
      <SectionHeading
        eyebrow="Approach"
        title="Agents as a force multiplier"
        meta="~40% faster delivery"
      />

      <Reveal>
        <p className="max-w-2xl text-xl leading-snug tracking-tight text-fg/90 sm:text-2xl">
          {agenticEdge.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {agenticEdge.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 120}>
            <div className="h-full rounded-2xl border border-line bg-surface/60 p-7 transition-colors hover:border-fg/20">
              <h3 className="font-medium">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80}>
            <h3 className="mb-5 font-mono text-[11px] uppercase tracking-widest text-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="group/tile relative flex size-14 items-center justify-center rounded-xl border border-line text-fg/70 transition-all hover:z-10 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <TechIcon name={item} size={22} />
                  <span className="sr-only">{item}</span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100"
                  >
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

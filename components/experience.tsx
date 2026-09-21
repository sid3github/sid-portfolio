import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-28 lg:py-36">
      <SectionHeading eyebrow="Experience" title="Seven years, four domains" meta="2016 — present" />

      <div>
        {experience.map((role) => (
          <Reveal key={role.company}>
            <article className="group grid gap-6 border-b border-line py-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                  {role.company}
                </h3>
                <p className="mt-1.5 text-sm text-fg/85">{role.title}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {role.period} · {role.location} · {role.mode}
                  {role.current && <span className="ml-2 text-accent">— now</span>}
                </p>
              </div>

              <ul className="space-y-3 lg:col-span-6 lg:col-start-7">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 text-accent" aria-hidden>
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

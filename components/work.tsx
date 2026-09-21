import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-28 lg:py-36">
      <SectionHeading eyebrow="Selected work" title="Products in production" meta="03 — shipped & live" />

      <div>
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article className="group grid gap-6 border-b border-line py-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {project.kind} · {project.year}
                </p>
                <h3 className="flex items-start gap-1.5 text-2xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                  {project.name}
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 size-5 -translate-x-1 translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      <TechIcon name={tech} size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <p className="leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-fg/75">
                      <span className="mt-0.5 text-accent" aria-hidden>
                        —
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

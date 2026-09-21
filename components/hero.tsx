import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { metrics, profile } from "@/lib/data";
import { AgentLog } from "@/components/agent-log";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-20 pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-20%] size-[32rem] rounded-full bg-accent/[0.05] blur-[130px]"
      />

      <Reveal>
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
          Based in {profile.location}
        </p>
      </Reveal>

      <h1 className="text-5xl font-medium leading-[1.04] tracking-[-0.03em] sm:text-7xl lg:text-[5.25rem]">
        <Reveal delay={100}>
          <span className="block">Frontend &amp; Agentic&nbsp;AI</span>
        </Reveal>
        <Reveal delay={200}>
          <span className="block text-muted">
            Engineer<span className="text-accent">.</span>
          </span>
        </Reveal>
      </h1>

      <Reveal delay={320}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.thesis}</p>
        <div className="mt-5">
          <AgentLog />
        </div>
      </Reveal>

      <Reveal delay={420}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-sm text-muted transition-colors hover:text-fg"
          >
            View resume
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={520}>
        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dd className="text-3xl font-medium tracking-tight sm:text-4xl">
                <Counter to={metric.to} prefix={metric.prefix} suffix={metric.suffix} />
              </dd>
              <dt className="mt-2 max-w-44 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-muted">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

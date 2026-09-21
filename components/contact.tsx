import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const socials = [
  { label: "GitHub", href: "https://github.com/sid3github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siddharth-padwal-b86034131" },
];

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-28">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            Let&apos;s work together
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-xl font-medium tracking-tight underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
              >
                {profile.email}
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <p className="mt-4 font-mono text-sm text-muted">{profile.phone}</p>
            </div>

            <div className="flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-wider text-muted sm:flex-row sm:justify-between">
          <p>
            © 2026 {profile.name} · {profile.location}
          </p>
          <p>Designed &amp; built by {profile.name} — with parallel agents</p>
        </div>
      </div>
    </footer>
  );
}

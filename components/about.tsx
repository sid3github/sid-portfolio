import { profile } from "@/lib/data";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section className="mx-auto grid max-w-5xl gap-14 px-6 py-28 lg:grid-cols-12 lg:items-center lg:py-36">
      <Reveal className="lg:col-span-7">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-accent">About</p>
        <p className="text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
          {profile.summary}
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
          EdTech · Healthcare · Sports Data · Telecom
        </p>
      </Reveal>

      <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
        <PhotoFrame src={profile.photo} alt={`Portrait of ${profile.name}`} />
      </Reveal>
    </section>
  );
}

import { marqueeTech } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {marqueeTech.map((tech) => (
        <span key={tech} className="flex items-center">
          <span className="px-10 opacity-80 transition-opacity hover:opacity-100" title={tech}>
            <TechIcon name={tech} size={34} />
            {!hidden && <span className="sr-only">{tech}</span>}
          </span>
          <span className="size-1 rounded-full bg-fg/15" aria-hidden />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line py-7">
      <div className="marquee-track flex w-max">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}

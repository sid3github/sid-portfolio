import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import {
  Cloud,
  Component,
  FileCode2,
  Sparkles,
  SquareTerminal,
  Webhook,
  Workflow,
} from "lucide-react";
import {
  siChartdotjs,
  siClaude,
  siCursor,
  siGit,
  siGoogle,
  siGsap,
  siLaravel,
  siModelcontextprotocol,
  siNextdotjs,
  siNuxt,
  siPhp,
  siPostgresql,
  siRazorpay,
  siReact,
  siRedux,
  siSass,
  siStripe,
  siSupabase,
  siSvelte,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

// Brand marks that are near-black get swapped for the page foreground,
// otherwise they vanish on the dark background.
function visibleHex(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.18 ? "#eeefe7" : `#${hex}`;
}

type IconEntry =
  | { brand: SimpleIcon; hex?: string }
  | { image: string }
  | { fallback: LucideIcon };

const ICONS: Record<string, IconEntry> = {
  React: { brand: siReact },
  "Next.js": { brand: siNextdotjs },
  Vue: { brand: siVuedotjs },
  Nuxt: { brand: siNuxt },
  Svelte: { brand: siSvelte },
  TypeScript: { brand: siTypescript },
  Redux: { brand: siRedux },
  Tailwind: { brand: siTailwindcss },
  "Tailwind CSS": { brand: siTailwindcss },
  SASS: { brand: siSass },
  "Claude Code": { brand: siClaude },
  "Claude Design": { brand: siClaude },
  "OpenAI Codex": { fallback: Sparkles },
  Cursor: { brand: siCursor },
  "Google Stitch": { brand: siGoogle },
  Figma: { image: "/logos/figma-original.svg" },
  Canva: { image: "/logos/canva-original.svg" },
  "MCP Integrations": { brand: siModelcontextprotocol },
  "Prompt Engineering": { fallback: SquareTerminal },
  Laravel: { brand: siLaravel },
  "REST APIs": { fallback: Webhook },
  Supabase: { brand: siSupabase },
  PostgreSQL: { brand: siPostgresql },
  PHP: { brand: siPhp },
  JSP: { fallback: FileCode2 },
  AWS: { fallback: Cloud },
  // Razorpay's official hex is a near-black navy; use their lighter brand blue.
  Razorpay: { brand: siRazorpay, hex: "3395FF" },
  Stripe: { brand: siStripe },
  Git: { brand: siGit },
  "CI/CD": { fallback: Workflow },
  "Design Systems": { fallback: Component },
  "Chart.js": { brand: siChartdotjs },
  GSAP: { brand: siGsap },
  MUI: { fallback: Component },
};

export function TechIcon({
  name,
  size = 14,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const entry = ICONS[name];
  if (!entry) return null;

  if ("image" in entry) {
    return (
      <Image
        src={entry.image}
        alt=""
        width={size}
        height={size}
        aria-hidden
        unoptimized
        className={className}
      />
    );
  }

  if ("brand" in entry) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={visibleHex(entry.hex ?? entry.brand.hex)}
        aria-hidden
        className={className}
      >
        <path d={entry.brand.path} />
      </svg>
    );
  }

  const Fallback = entry.fallback;
  return (
    <Fallback size={size} strokeWidth={1.75} aria-hidden className={className} />
  );
}

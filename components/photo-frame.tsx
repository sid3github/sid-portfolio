"use client";

import Image from "next/image";
import { useRef } from "react";

const MAX_TILT = 10;

export function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef<boolean | null>(null);

  const prefersReducedMotion = () => {
    if (reducedMotion.current === null) {
      reducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }
    return reducedMotion.current;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty("--rx", `${(-y * MAX_TILT).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * MAX_TILT).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--shx", `${(-x * 24).toFixed(1)}px`);
    el.style.setProperty("--shy", `${(y * 24 + 24).toFixed(1)}px`);
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--gx", "50%");
    el.style.setProperty("--gy", "-20%");
    el.style.setProperty("--shx", "0px");
    el.style.setProperty("--shy", "24px");
  };

  return (
    <div className="photo-scene mx-auto max-w-72">
      <div
        ref={ref}
        className="photo-card group relative"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="photo-face relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={520}
            height={640}
            className="w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          />
          {/* Light sweep that tracks the cursor */}
          <div className="photo-glare pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </div>
    </div>
  );
}

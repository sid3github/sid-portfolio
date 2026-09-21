"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium tracking-tight">
          Siddharth Padwal
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const LINES = [
  "spawning agents — feature · refactor · review",
  "design → code pipeline: component shipped in hours",
  "parallel run complete · quality held · ~40% faster",
];

const TYPE_MS = 42;
const HOLD_MS = 2200;

export function AgentLog() {
  const [text, setText] = useState(LINES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let line = 0;
    let char = 0;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      char += 1;
      setText(LINES[line].slice(0, char));
      if (char < LINES[line].length) {
        timer = setTimeout(type, TYPE_MS);
      } else {
        timer = setTimeout(() => {
          line = (line + 1) % LINES.length;
          char = 0;
          setText("");
          timer = setTimeout(type, 400);
        }, HOLD_MS);
      }
    };

    timer = setTimeout(() => {
      setText("");
      timer = setTimeout(type, 400);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="font-mono text-xs text-muted sm:text-sm" aria-hidden>
      <span className="text-accent">❯</span> {text}
      <span className="caret text-accent">▍</span>
    </p>
  );
}

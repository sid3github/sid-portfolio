export const profile = {
  name: "Siddharth Padwal",
  role: "Senior Frontend & Agentic AI Engineer",
  years: "7+ years",
  location: "Mumbai, India",
  email: "siddharthpadwal3@gmail.com",
  phone: "+91 87790 78237",
  linkedin: "https://linkedin.com/in/siddharth-padwal-b86034131",
  github: "https://github.com/sid3github",
  resumeUrl: "/Siddharth_Padwal_CV_2026.pdf",
  // Drop the portrait at public/portrait.jpg — the frame swaps it in automatically.
  photo: "/portrait.jpg",
  // The one-line thesis for the hero.
  thesis:
    "I build production web products — and orchestrate parallel AI agents to ship them 3–5× faster.",
  summary:
    "Senior Frontend Developer with 7+ years building production web products across EdTech, healthcare, sports data, and telecom. Currently leading frontend for a multi-tenant School ERP and two EdTech platforms at SR Edu Technologies — owning architecture, UI systems, sprint planning, and shipping.",
};

export const metrics = [
  { to: 7, prefix: "", suffix: "+", label: "Years shipping to production" },
  { to: 3, prefix: "", suffix: "", label: "EdTech products live" },
  { to: 40, prefix: "~", suffix: "%", label: "Faster delivery with agentic AI" },
  { to: 4, prefix: "", suffix: "", label: "Domains — EdTech to Telecom" },
];

// Infinite marquee band — the working vocabulary.
export const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue",
  "Nuxt",
  "Tailwind",
  "Claude Code",
  "OpenAI Codex",
  "Cursor",
  "Supabase",
  "Laravel",
  "GSAP",
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "school-erp",
    name: "School ERP Platform",
    kind: "Multi-tenant SaaS",
    year: "2025",
    summary:
      "A multi-role ERP serving Admin, School, Branch, Teacher, and Parent across multiple schools. I lead frontend — architecture, sprint planning, and UI delivery end to end.",
    highlights: [
      "Owns architecture and UI delivery for five distinct role-based dashboards",
      "Ran a UI modernization sprint migrating AdminLTE, Bootstrap, MUI and PrimeReact to a single standardized React system",
      "Planned a 70-ticket Jira backlog across five sprints",
    ],
    stack: ["React", "TypeScript", "Tailwind", "MUI"],
  },
  {
    id: "abacusync",
    name: "AbacuSync",
    kind: "EdTech · Mental Math",
    year: "2025",
    summary:
      "A digital abacus and mental-math platform with a four-level content hierarchy — Levels → Units → Topics — plus student progress tracking and an admin CRM.",
    highlights: [
      "Built the full learner experience and a structured four-level content model",
      "Student progress tracking with an admin-side CRM",
      "Integrated Razorpay for subscription and course-purchase flows",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Razorpay"],
  },
  {
    id: "vedic-math",
    name: "Vedic Math Platform",
    kind: "EdTech · Learning",
    year: "2025",
    summary:
      "A Vedic Math learning product built frontend-first from scratch: quiz systems, final-test modules, and level-based learning flows with cascading course configuration.",
    highlights: [
      "Designed quiz systems, final-test modules and level-based flows from zero",
      "Structured cascading product configuration for course and level mapping",
      "Shipped via a design-to-code pipeline in hours, not days",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  mode: string;
  points: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    company: "SR Edu Technologies",
    title: "Senior Frontend Developer",
    period: "May 2025 — Present",
    location: "Hyderabad, India",
    mode: "On-site",
    current: true,
    points: [
      "Lead frontend for a multi-role School ERP used across multiple schools — owning architecture, sprint planning, and UI delivery.",
      "Built AbacuSync and a Vedic Math platform, two EdTech products, from the ground up.",
      "Pioneered agentic AI coding workflows — Claude Code, OpenAI Codex, and Cursor — running parallel agents for features, refactors, and review; cut feature time ~40%.",
      "Established a design-to-code pipeline with Claude Design and Google Stitch, compressing ideation-to-component from days to hours.",
      "Mentored junior developers on Git workflows, AI-assisted development, and component-driven architecture.",
    ],
  },
  {
    company: "Sportz Interactive",
    title: "Senior Associate, Development (JS)",
    period: "Aug 2024 — Apr 2025",
    location: "Mumbai, India",
    mode: "Hybrid",
    points: [
      "Built and maintained complex sports-data web apps with real-time visualization and high-traffic performance needs.",
      "Optimized rendering pipelines and component architecture for low-latency live sports updates.",
      "Collaborated across backend, design, and QA in fast-turnaround release cycles.",
    ],
  },
  {
    company: "RelifeMS",
    title: "Frontend / UI Developer",
    period: "May 2022 — Apr 2024",
    location: "Mumbai, India",
    mode: "On-site",
    points: [
      "Owned frontend for a healthcare platform — accessible, responsive interfaces in Vue and Nuxt.js.",
      "Implemented a SASS-based design system that improved UI consistency across the product suite.",
      "Shipped features at high quality in 2-week Agile sprints with backend and UX teams.",
    ],
  },
  {
    company: "PertSol",
    title: "Senior User Interface Developer",
    period: "Jul 2021 — May 2022",
    location: "Mumbai, India",
    mode: "On-site",
    points: [
      "Developed JSP and Bootstrap enterprise telecom dashboards with jQuery-driven dynamic data rendering.",
      "Delivered rapid UI fixes and enhancements in a fast-paced telecom environment.",
    ],
  },
  {
    company: "72 Dragons",
    title: "Web Developer",
    period: "Mar 2019 — Jun 2021",
    location: "Mumbai, India",
    mode: "Remote",
    points: [
      "Built full-stack web apps with React, Vue, PHP, and Bootstrap for diverse client projects.",
      "Delivered client-facing data dashboards with Chart.js and unit-testing coverage.",
    ],
  },
];

export const agenticEdge = {
  intro:
    "Agentic AI isn't a buzzword on my résumé — it's how I ship. I run multiple coding agents in parallel and treat them as a force multiplier, not autocomplete.",
  pillars: [
    {
      title: "Parallel agents",
      body: "Claude Code (Desktop & CLI), OpenAI Codex, and Cursor running concurrently — one on features, one on refactors, one on review.",
    },
    {
      title: "Design-to-code pipeline",
      body: "Claude Design and Google Stitch for rapid UI prototyping, with a structured handoff into implementation.",
    },
    {
      title: "Quality held steady",
      body: "AI-assisted review and MCP integrations keep code quality high while delivery time drops ~40%.",
    },
  ],
};

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Svelte",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "SASS",
    ],
  },
  {
    label: "AI & Agentic",
    items: [
      "Claude Code",
      "OpenAI Codex",
      "Cursor",
      "Claude Design",
      "Google Stitch",
      "Figma",
      "Canva",
      "MCP Integrations",
      "Prompt Engineering",
    ],
  },
  {
    label: "Backend & Data",
    items: ["Laravel", "REST APIs", "Supabase", "PostgreSQL", "PHP", "JSP"],
  },
  {
    label: "Cloud & Systems",
    items: [
      "AWS",
      "Razorpay",
      "Stripe",
      "Git",
      "CI/CD",
      "Design Systems",
      "Chart.js",
    ],
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

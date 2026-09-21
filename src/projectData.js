// Products and builds shown in the Projects panel.
//
// `highlights` are what fills the detail pane, so each entry carries its own
// substance rather than leaning on a screenshot. Company products have no
// public repo — the card shows scope and stack instead of a code link.
export const projectItems = [
  {
    project_name: "School ERP",
    kind: "In production",
    project_company: "SR Edu Technologies",
    project_description:
      "Multi-tenant, multi-role school ERP running across multiple schools, with separate Admin, School, Branch, Teacher and Parent experiences on one codebase.",
    highlights: [
      "Own the frontend architecture, sprint planning and UI delivery.",
      "Role-aware routing and permissions across five distinct user types.",
      "Led the migration from AdminLTE, Bootstrap, MUI and PrimeReact to a single React component system.",
    ],
    project_tags: ["React", "Tailwind", "MUI", "Laravel"],
  },
  {
    project_name: "EdChamps",
    kind: "In production",
    project_company: "SR Edu Technologies",
    project_url: "https://theedchamps.com/",
    project_description:
      "Consumer-facing skill-learning platform for children, built around animated video lessons, interactive games and adaptive learning paths across Abacus, Vedic Math, Coding, AI, Rubik's Cube and Memory.",
    highlights: [
      "Course and level hierarchy with per-student progress tracking.",
      "Parent-facing progress dashboard, certificates, streaks and leaderboards.",
      "Subscription and course-purchase flows with cascading product configuration.",
    ],
    project_tags: ["React", "Tailwind", "Laravel", "Razorpay"],
  },
  {
    project_name: "InboxIQ",
    kind: "Build",
    project_company: "Aptask assignment",
    project_url: "https://aptask-assignment-mu.vercel.app/",
    project_description:
      "AI-first universal email client that merges Gmail, Outlook and any IMAP mailbox into a single feed, where every message arrives already summarised and prioritised.",
    highlights: [
      "One-line summary and a five-level priority on every incoming message.",
      "Triage runs locally on the client — no API key and no per-message cost.",
      "Unified feed across multiple providers and accounts at once.",
    ],
    project_tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    project_name: "GameDevPanel",
    kind: "In production",
    project_company: "Client project",
    project_url: "https://gamedevpanel.com/",
    project_description:
      "Internal admin and back-office panel for game operations — the authenticated surface teams use to manage users, content and configuration.",
    highlights: [
      "Authenticated back-office surface with role-based access.",
      "Data-dense management views over operational records.",
    ],
    project_tags: ["React", "TypeScript"],
  },
];

export default projectItems;

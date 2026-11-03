// All project info lives here. Cards on the home page and the detail pages
// at /projects/<slug> are both generated from this list.
// Anything marked TODO is placeholder data — search "TODO" to find it all.

const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

export const projects = [
  {
    slug: "jobify",
    title: "Jobify",
    subtitle: "Hiring platform with skill tests and video interviews",
    year: "2024",
    image: "/images/jobify/home.png",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "LiveKit", "TypeScript"],
    github: "https://github.com/4K45H107/JOBIFY",
    preview: "https://jobify-hire.vercel.app",
    links: [
      {
        label: "Architecture Decisions",
        href: "https://github.com/4K45H107/JOBIFY/tree/main/docs/adr",
      },
      {
        label: "Original 2024 Project",
        href: "https://github.com/4K45H107/CSE408_JOBIFY",
      },
    ],
    description:
      "Jobify is a hiring platform that puts both sides in one app. Job seekers find jobs, apply in one click, take skill tests and join video interviews. Employers post jobs, screen applicants, set multiple-choice or coding tests, and interview candidates while watching them write answers live. It started as our CSE408 team project at BUET in 2024, and I rebuilt it from scratch, taking it from a prototype to a deployed, tested product with a new architecture, backend and database.",
    gallery: [
      { src: "/images/jobify/search.png", caption: "Search that handles word forms, synonyms and typos" },
      { src: "/images/jobify/coding-test.png", caption: "Timed coding test with a highlighting editor" },
      { src: "/images/jobify/interview.png", caption: "Video interview with the candidate's live notepad" },
      { src: "/images/jobify/applicants.png", caption: "Applicants board with scores, stages and scheduling" },
      { src: "/images/jobify/dashboard.png", caption: "Dashboard with counts and a 7/30-day activity chart" },
      { src: "/images/jobify/home.png", caption: "Home with jobs picked for the seeker, with reasons" },
    ],
    stack: [
      { label: "Web", value: "Next.js 15 (App Router), React 19, Tailwind CSS v4, react-hook-form, Monaco editor, LiveKit components" },
      { label: "API", value: "NestJS 11, Prisma 7, Zod (nestjs-zod), argon2, jose, BullMQ, livekit-server-sdk" },
      { label: "Data", value: "PostgreSQL (full-text search, pg_trgm, fuzzystrmatch), Redis, S3-compatible object storage" },
      { label: "Email", value: "React Email, Brevo" },
      { label: "Tooling", value: "pnpm, Turborepo, TypeScript, Vitest, Testing Library, Supertest, ESLint, Prettier" },
      { label: "Hosting", value: "Vercel (web), Render (API, worker, Redis), Neon (Postgres, object storage), LiveKit Cloud, GitHub Actions (CI)" },
    ],
    sections: [
      {
        heading: "Try It Live",
        items: [
          "Job seeker: seeker@jobify.dev / Password123!",
          "Employer: employer@jobify.dev / Password123!",
          "The API runs on a free plan and sleeps when idle, so the first visit after a quiet spell can take up to a minute.",
        ],
      },
      {
        heading: "For Job Seekers",
        items: [
          "A profile with skills, CV and preferences, and \"For you\" recommendations that explain why each job was picked",
          "Search that understands word forms, abbreviations, synonyms and typos, ranked by best match, with suggestions as you type",
          "Easy Apply with contact details, a CV snapshot and the employer's screening questions",
          "Skill tests: timed multiple choice graded on the server, or a coding problem in a Monaco code editor",
          "Video interviews with a countdown, reminders and a notepad (text or highlighted code) the interviewer sees live",
          "Saved and recent jobs, applications by stage, a dashboard, live notifications and email",
        ],
      },
      {
        heading: "For Employers",
        items: [
          "Create a company or ask to join one; company admins approve recruiters",
          "Post jobs with screening questions, then add a multiple-choice test or a coding problem from a library of 30",
          "An applicants board to sort by score or experience, read CVs and code, shortlist, make offers, reject and schedule interviews with clash checks",
          "Run interviews and end them for everyone; the candidate's notes are saved afterwards",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "A modular monolith: one NestJS API with a module per domain (accounts, companies, jobs, applications, assessments, interviews, notifications, email), plus a separate BullMQ worker for reminders and email",
          "Modules talk through exported services, never each other's tables, so a module such as a code runner could move out later",
          "Browser traffic goes through the Next.js app's /api proxy, so sign-in cookies stay first-party",
          "Zod schemas in a shared package validate requests in the API and forms in the web app, inside a pnpm + Turborepo monorepo",
          "Live notifications reach the browser over Server-Sent Events fed by Redis pub/sub; the interview notepad travels over LiveKit text streams",
          "Every key choice is written up as an architecture decision record in the repo",
        ],
      },
      {
        heading: "Database",
        items: [
          "PostgreSQL through Prisma 7 with versioned migrations and a re-runnable seed, replacing the MongoDB of the 2024 version because the data is relational",
          "27 models covering users and profiles, companies and members, jobs and skills, applications with a stage history, tests and attempts, interviews, notifications, email logs and sessions",
          "Constraints do real work: one application per job and seeker, one skill test per job, one email log per notification",
          "Job search runs inside Postgres: English full-text search weighted toward title and skills, a synonyms list, typo tolerance with edit distance, and ranked results with a partial-match fallback",
          "Hosted on Neon in Singapore; CVs, photos and logos live in a private S3-compatible bucket read through short-lived signed URLs",
        ],
      },
      {
        heading: "Quality & Security",
        items: [
          "About 380 tests: unit, component (Testing Library) and API end-to-end tests (Supertest against a real Postgres)",
          "CI on every pull request: format, build, migrations and seed, lint, typecheck, tests and a gitleaks secret scan",
          "About 40 pages scanned with axe-core in light and dark mode (WCAG 2.1 AA, 0 violations), with keyboard flows and dialog focus handling",
          "Own authentication: argon2id passwords, rotating refresh tokens with reuse detection, email verification, password reset and Google sign-in",
          "Role and ownership checks on every endpoint, rate limits, and hidden test answers that never reach the browser",
        ],
      },
    ],
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    subtitle: "Real-time messaging with voice and video calls",
    year: "2024",
    image: PLACEHOLDER_IMAGE, // TODO: add screenshot to public/images/
    tech: ["React", "Firebase", "Zustand", "WebRTC"],
    github: "https://github.com/4K45H107/react-chat-app",
    preview: "https://example.com", // TODO: live demo link
    description:
      "A real-time messaging app built with React, Vite, Zustand and Firebase (Auth, Firestore, Storage). It supports 1:1 and group chats, media and voice messages, presence and typing indicators, and 1:1 voice and video calls over WebRTC, with participant-scoped security rules and paginated message history.",
    sections: [
      {
        heading: "Features",
        items: [
          "1:1 and group chats with edit, soft-delete and in-thread search",
          "Live typing indicators and online/offline presence",
          "Image messages, camera capture, voice notes and a shared photos grid",
          "1:1 voice and video calls using WebRTC with Firestore signaling",
          "Archive, mute, block, light/dark themes and browser notifications",
          "Participant-scoped Firestore and Storage rules with upload rate limits",
        ],
      },
    ],
  },
  {
    slug: "wifi-video-streaming",
    title: "Wi-Fi Controlled Video Streaming Bot",
    subtitle: "Remote-controlled video streaming robot",
    year: "2023",
    image: PLACEHOLDER_IMAGE, // TODO: add photo to public/images/
    tech: ["Raspberry Pi", "USB Webcam", "Wi-Fi Adapter"],
    github: null, // TODO: repo link, if there is one
    preview: "https://example.com", // TODO: live demo / video link
    description:
      "A Raspberry Pi robot that streams live video from a USB webcam and is driven over Wi-Fi from a laptop or any other connected device.",
    sections: [
      {
        heading: "Use Cases",
        items: [
          "Remote surveillance",
          "Distance learning and training",
          "Event streaming",
          "Research",
        ],
      },
    ],
  },
  {
    slug: "fms",
    title: "FMS",
    subtitle: "Football Managerial System",
    year: "2021",
    image: PLACEHOLDER_IMAGE, // TODO: add screenshot to public/images/
    tech: ["JavaFX", "Java Networking", "Java Threading"],
    github: "https://github.com/4K45H107", // TODO: repo link
    preview: null,
    description:
      "A football club management game inspired by Football Manager, built with JavaFX, Java networking and multithreading to make running a club feel seamless.",
    sections: [
      {
        heading: "Features",
        items: [
          "Buy and sell players between clubs",
          "Bid for players on the transfer market",
        ],
      },
    ],
  },
  {
    slug: "dx-ball",
    title: "DX-Ball",
    subtitle: "Classic arcade game clone",
    year: "2020",
    image: PLACEHOLDER_IMAGE, // TODO: add screenshot to public/images/
    tech: ["iGraphics", "OpenGL"],
    github: "https://github.com/4K45H107", // TODO: repo link
    preview: null,
    description:
      "A clone of the classic DX-Ball arcade game, built with the iGraphics library on OpenGL.",
    sections: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

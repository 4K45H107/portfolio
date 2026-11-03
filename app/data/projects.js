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
    previewNotice:
      "Heads up: the demo runs on free hosting that sleeps when nobody is using it. On your first visit the server can take up to a minute to wake up, so if the page shows an error or keeps loading, wait a few seconds and reload. After that it runs at normal speed.",
    links: [
      {
        label: "Architecture Decisions",
        href: "https://github.com/4K45H107/JOBIFY/tree/main/docs/adr",
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
    subtitle: "Group chat with WebRTC voice and video calls",
    year: "2024",
    image: "/images/realtime-chat/chat.jpg",
    tech: ["React", "Firebase", "Firestore", "WebRTC", "Zustand", "Vite"],
    github: "https://github.com/4K45H107/react-chat-app",
    preview: "https://reactchat-ed5f2.web.app",
    links: [
      {
        label: "Architecture Decisions",
        href: "https://github.com/4K45H107/react-chat-app/tree/main/docs/adr",
      },
    ],
    description:
      "A real-time chat app with one-to-one and group messaging, photos and voice notes, and one-to-one voice and video calls over WebRTC. It runs on Firebase with no backend of its own, so Firestore security rules act as the authorization layer. I reworked the data model so no user ever writes another user's documents, locked the rules down field by field, and covered them with tests. CI runs every check on each pull request and deploys to Firebase Hosting from main.",
    gallery: [
      { src: "/images/realtime-chat/realtime.gif", caption: "Two accounts side by side: a message arrives instantly and the reply comes back" },
      { src: "/images/realtime-chat/call.jpg", caption: "Video call over WebRTC with a picture-in-picture self view" },
      { src: "/images/realtime-chat/group.jpg", caption: "Group chat with members, settings and shared photos" },
      { src: "/images/realtime-chat/emoji.jpg", caption: "Emoji picker, loaded only when first opened" },
      { src: "/images/realtime-chat/chat-light.jpg", caption: "Light theme" },
      { src: "/images/realtime-chat/mobile.jpg", caption: "Chat list and conversation on a phone" },
    ],
    stack: [
      { label: "UI", value: "React 18, Vite 5, Zustand, CSS with light and dark theme variables" },
      { label: "Backend", value: "Firebase Auth, Firestore (offline cache), Cloud Storage, security rules" },
      { label: "Calls", value: "WebRTC, Firestore signaling, Metered TURN relay" },
      { label: "Testing", value: "Vitest, @firebase/rules-unit-testing, Firebase Emulator Suite" },
      { label: "Tooling", value: "ESLint, size-limit, GitHub Actions" },
      { label: "Hosting", value: "Firebase Hosting, deployed from main by GitHub Actions; nightly demo reset" },
    ],
    sections: [
      {
        heading: "Try It Live",
        items: [
          "Nadia: nadia@reactchat.dev / Password123!",
          "Tanvir: tanvir@reactchat.dev / Password123!",
          "Open both accounts in two browsers to watch messages arrive live and to call each other. The demo data resets every night.",
        ],
      },
      {
        heading: "Features",
        items: [
          "One-to-one and group chats with edit, soft delete, emoji, search inside a chat and paginated history",
          "Live sidebar and thread, typing indicator, online status, read state and browser notifications",
          "Photos, camera capture, voice notes and a shared photos panel",
          "One-to-one voice and video calls with ringing, busy and missed states, logged in the thread",
          "Block and unblock, mute and archive, leave a group, light and dark themes, phone layout",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "No backend of its own: the React app talks to Firebase directly, and security rules are the authorization layer",
          "The sidebar is a live query over the chats a user belongs to; each chat stores its last-message preview and a read marker per member",
          "A message and its preview are written in one atomic batch; direct chats use the sorted pair of user ids, so each pair has exactly one chat",
          "Calls exchange the WebRTC offer, answer and ICE candidates through Firestore; media flows peer to peer, or through a TURN relay on strict networks",
          "Every key choice is written up as an architecture decision record in the repo",
        ],
      },
      {
        heading: "Security",
        items: [
          "Reworked a data model that let any signed-in user read or wipe other users' chat lists and see their emails",
          "Members-only access to chats and messages; mute and archive settings private to their owner",
          "Field-level validation and server timestamps, so nobody can write as someone else or backdate a message",
          "Blocking, group membership and call states (only the callee can answer) enforced in the rules, not just the UI",
          "36 rules tests on the Firestore emulator; run against the original rules, 18 of them fail",
        ],
      },
      {
        heading: "Performance & Quality",
        items: [
          "Split the bundle at sign-in: the first screen needs 84 KB of JavaScript (gzip) instead of 282 KB",
          "The emoji picker and file uploads load on first use; size budgets in CI keep each chunk from growing back",
          "11 integration tests drive the app's real services on seeded emulators: messaging, groups, calls, blocking and sign-up",
          "Every pull request runs lint, unit tests, the build, size budgets and the emulator suites; main deploys automatically once they pass",
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
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

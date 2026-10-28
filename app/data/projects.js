// All project info lives here. Cards on the home page and the detail pages
// at /projects/<slug> are both generated from this list.
// Anything marked TODO is placeholder data — search "TODO" to find it all.

const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

export const projects = [
  {
    slug: "jobify",
    title: "Jobify",
    subtitle: "Full-stack job portal with video interviews",
    year: "2024",
    image: PLACEHOLDER_IMAGE, // TODO: add screenshot to public/images/
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Agora UI Kit"],
    github: "https://github.com/4K45H107", // TODO: repo link
    preview: "https://example.com", // TODO: live demo link
    description:
      "Jobify is a full-stack job portal built with Next.js that makes finding a job easier. Inspired by LinkedIn and Glassdoor, it connects job seekers with employers and lets them run interviews online without leaving the platform.",
    sections: [
      {
        heading: "Features",
        items: [
          "Job seekers search for openings that match their preferences",
          "Employers post new job listings",
          "Online interviews through a built-in video call module powered by the Agora UI Kit",
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

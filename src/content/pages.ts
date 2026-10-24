import { profile } from "@/content/profile";

export const pageCopy = {
  home: {
    description:
      "Dileep Rajoriya is a software engineer in Gurugram. See the full-stack projects, the roles behind them, and how to hire him for a build or a job.",
  },
  projects: {
    eyebrow: "Case studies",
    title: "Projects",
    description:
      "Projects by Dileep Rajoriya: PaperFlow, a campaign portal, a dealer system, and a job portal. Each case study covers the problem, the build, and the result.",
  },
  services: {
    eyebrow: "Freelance",
    title: "Services",
    description:
      "Freelance services from Dileep Rajoriya: websites, full-stack apps, REST APIs, integrations, and background jobs. See what is included and how a project starts.",
  },
  about: {
    eyebrow: "Profile",
    title: profile.name,
    description:
      "About Dileep Rajoriya, a software engineer in Gurugram. The current role at Swageazy, earlier work at Maitrii and CreditQ, and the stack behind the work.",
  },
  experience: {
    eyebrow: "Background",
    title: "Experience",
    description:
      "Engineering experience for Dileep Rajoriya in Gurugram. The current role at Swageazy, plus earlier full-stack work at Maitrii Infotech and CreditQ.",
  },
  blog: {
    eyebrow: "Notes",
    title: "Blog",
    description:
      "Engineering notes from Dileep Rajoriya. No articles are published yet. This page will list original writing when a piece is ready to stand on its own.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    description:
      "Contact Dileep Rajoriya in Gurugram about a freelance build or a full-time engineering role. Email, phone, and what to put in the first message.",
  },
} as const;

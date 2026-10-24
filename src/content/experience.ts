export const skillGroups = [
  {
    label: "Interface",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    label: "Jobs and cloud",
    items: ["Redis", "AWS SES, SNS, SQS, and S3", "Docker", "PM2"],
  },
  {
    label: "Also used",
    items: ["TypeORM", "Sequelize", "React Native"],
  },
] as const;

export const learning = [
  "System design",
  "Data structures and algorithms",
  "DevOps",
  "Python",
  "AI and LLM applications",
] as const;

export const experience = [
  {
    role: "Software development engineer I",
    org: "Swageazy",
    dates: "Current",
    summary:
      "I work as a software development engineer in Gurugram. Start date and project details for this role are not on this page yet.",
  },
  {
    role: "Software engineer, full stack",
    org: "Maitrii Infotech Solution",
    dates: "Mar 2026 — Present",
    summary:
      "I build the dealer system garages use to assign technician work, send live task alerts, and run bulk email. Access is split across admin, staff, and technician, and alerts reach 50+ people in under a second.",
  },
  {
    role: "Software engineer, MERN and AWS",
    org: "CreditQ",
    dates: "Jun 2025 — Mar 2026",
    summary:
      "I built multi-channel campaign services for email, SMS, and WhatsApp. Throughput rose 35%, the mail pipeline handles 100k+ emails a day, and Redis deduplication cut processing latency 40%.",
  },
] as const;

export const education = {
  school: "Astral Institute of Technology and Research",
  credential: "B.Tech, Computer Science and Engineering",
  dates: "2019 — 2023",
  detail: "CGPA 7.9 / 10",
} as const;

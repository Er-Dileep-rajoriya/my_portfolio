export const hero = {
  badge: "Available for work",
  words: ["Hi,", "I'm", "Dileep."],
  lede: "AI Full Stack Engineer building full-stack web applications, APIs, and background jobs.",
  roles: [
    "AI Full Stack Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
  ],
} as const;

export const proof = [
  {
    value: "100k+",
    label: "Emails a day through the CreditQ campaign pipeline",
  },
  {
    value: "35%",
    label: "Higher throughput after sends moved onto queues",
  },
  {
    value: "50+",
    label: "Garage users alerted in under a second",
  },
] as const;

export const practice = [
  {
    title: "The screen",
    body: "React and Next.js, with one obvious task: assign a ticket, send a campaign, or score a resume.",
  },
  {
    title: "The API",
    body: "Node, MongoDB, and access split so admin, staff, recruiter, and candidate do not share one view.",
  },
  {
    title: "After the click",
    body: "SQS, Redis, and LLM calls so mail and AI work finish without holding the page.",
  },
] as const;

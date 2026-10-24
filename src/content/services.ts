export const services = [
  {
    title: "Business and portfolio sites",
    summary:
      "A responsive site that says who you are, what you ship, and how to hire you, without a pile of unused pages.",
    forWhom: "Founders and engineers who need a clear site, not a theme with fake proof.",
    includes: [
      "Pages for the offer, the work, and a way to get in touch",
      "A layout that stays readable on a phone",
      "Copy and metadata taken from facts you can explain",
    ],
  },
  {
    title: "Full-stack applications",
    summary:
      "A React or Next.js product with the API, the database, and the empty states people actually hit.",
    forWhom: "Teams who need the product shipped past the first screen.",
    includes: [
      "The interface, auth, and the data model",
      "MongoDB or MySQL, depending on the job",
      "A deploy you can keep running",
    ],
  },
  {
    title: "REST APIs and integrations",
    summary:
      "HTTP APIs and third-party connections, with a log when a vendor call fails.",
    forWhom: "Products that need to talk to mail, payments, or another internal system.",
    includes: [
      "REST endpoints with a clear job",
      "Vendor calls, retries, and the failure path",
      "Access rules so every role does not share one view",
    ],
  },
  {
    title: "Background jobs",
    summary:
      "Queues and scheduled work so mail, notifications, and slow tasks do not hold the page.",
    forWhom: "Apps whose send button freezes, or whose jobs only run when someone watches them.",
    includes: [
      "SQS or a similar queue, with retries",
      "A delivery or job log you can query",
      "PM2 or another process manager for the worker",
    ],
  },
  {
    title: "Fixes to an existing app",
    summary:
      "Debugging and small improvements on a codebase that already has users.",
    forWhom: "Teams who need a specific bug or bottleneck fixed, not a rewrite.",
    includes: [
      "A written note of the bug before the change",
      "The smallest change that holds up",
      "A check you can rerun after the fix",
    ],
  },
] as const;

export const faqs = [
  {
    question: "How does a freelance project start?",
    answer:
      "Send the goal, the deadline, and what already exists. I reply within 24 hours with whether it is a fit, a rough shape of the work, and the next step.",
  },
  {
    question: "Do you also consider full-time roles?",
    answer:
      "Yes. That is what I am looking for. Send the role link, the team size, and what the first 90 days need to prove. Freelance projects are open alongside that.",
  },
  {
    question: "What should the first email include?",
    answer:
      "The outcome you want, the date you care about, links to the current product, and any constraint I should not guess at. A budget range is enough.",
  },
] as const;

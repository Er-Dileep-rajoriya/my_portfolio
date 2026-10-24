export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  client: string;
  url?: string;
  stack: string[];
  problem: string;
  approach: string[];
  outcome: string;
  featured: boolean;
  placeholder: boolean;
  updated: string;
};

export const projects: Project[] = [
  {
    slug: "paperflow",
    title: "PaperFlow",
    summary:
      "PaperFlow is the AI resume product I designed and shipped: create a resume, score it for an ATS, tailor it to a job, and write the cover letter.",
    year: "2026",
    role: "Founder and full stack engineer",
    client: "Independent product",
    url: "https://paperflow.in",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Tailwind CSS"],
    problem:
      "Job seekers need a resume that fits a specific role and survives an ATS screen. A blank template does not tell them what to change, and waiting on a generation should not freeze the page.",
    approach: [
      "Designed the product in Next.js and Tailwind, with accounts, subscription plans, and email through AWS SES.",
      "Connected resume scoring, job-specific tailoring, and cover letters to LLM APIs behind REST endpoints.",
      "Moved the slow AI work onto AWS SQS so a generation runs in the background and the interface stays responsive.",
    ],
    outcome:
      "PaperFlow is live at paperflow.in. People can create a resume, run an ATS analysis, tailor it to a job, and generate a cover letter.",
    featured: true,
    placeholder: false,
    updated: "2026-10-24",
  },
  {
    slug: "campaign-portal",
    title: "Campaign portal",
    summary:
      "The campaign portal I built at CreditQ sends email, SMS, and WhatsApp at volume, with queues, deduplication, retries, and a dashboard for the trail.",
    year: "2026",
    role: "Software engineer",
    client: "CreditQ",
    stack: ["TypeScript", "React", "Node.js", "MongoDB", "Redis", "AWS"],
    problem:
      "Multi-channel campaigns were slow to send, easy to send twice, and painful to watch. A failed batch meant someone checking logs by hand.",
    approach: [
      "Split delivery into SQS consumers with concurrency limits, backpressure, and a dead-letter queue.",
      "Deduplicated sends in Redis, logged SES events in MongoDB, and retried from that record.",
      "Built React dashboards for pagination, live reporting, vendor responses, and JSON log previews.",
      "Added cron checks that catch campaigns which never triggered.",
    ],
    outcome:
      "Throughput improved 35%. The mail pipeline handles 100k+ emails a day, manual monitoring dropped 80%, and processing latency fell 40%.",
    featured: true,
    placeholder: false,
    updated: "2026-03-31",
  },
  {
    slug: "dealer-management",
    title: "Dealer management system",
    summary:
      "The dealer system I am building for 2-wheeler garages assigns technician work, pushes live task alerts, and keeps a log of every bulk email.",
    year: "2026",
    role: "Software engineer",
    client: "Maitrii Infotech Solution",
    stack: ["React", "Node.js", "MongoDB", "Firebase", "Socket.IO", "AWS"],
    problem:
      "Garage teams lost time deciding who should take the next service ticket. Alerts were easy to miss, and bulk email had no record when a send failed.",
    approach: [
      "Built assignment so a ticket lands on a technician instead of sitting in a shared pile.",
      "Delivered task alerts with Firebase Cloud Messaging and Socket.IO.",
      "Separated admin, staff, and technician access, and logged SES sends in MongoDB with failure detail.",
    ],
    outcome:
      "Alerts reach 50+ concurrent users in under a second. The delivery log tracks 10k+ emails a day, and tickets move because the assignee is explicit.",
    featured: true,
    placeholder: false,
    updated: "2026-10-24",
  },
  {
    slug: "job-portal",
    title: "Job portal",
    summary:
      "A job portal I built with roles for admin, recruiter, and candidate, plus filtered search, resume upload, and pagination that holds up as data grows.",
    year: "",
    role: "Full stack engineer",
    client: "Personal project",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    problem:
      "A hiring board falls apart when candidates, recruiters, and admins share one view, and when search or resume upload slows down as the data grows.",
    approach: [
      "Split access so admin, recruiter, and candidate each see the actions that belong to them.",
      "Added search across location, experience, and skills, with resume upload through Cloudinary.",
      "Indexed MongoDB and paginated the APIs so job and application lists stay usable as they grow.",
    ],
    outcome:
      "Recruiters can post and filter roles, candidates can search and upload a resume, and the lists stay responsive because the queries are indexed and paged.",
    featured: false,
    placeholder: false,
    updated: "2026-10-24",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  return featured.length > 0 ? featured : projects;
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || projects.length < 2) return undefined;
  return projects[(index + 1) % projects.length];
}

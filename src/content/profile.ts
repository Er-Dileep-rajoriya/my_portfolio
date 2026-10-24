/**
 * Identity, contact, and the public site URL.
 * Facts below come from the resume. Set NEXT_PUBLIC_SITE_URL before publishing.
 */
export const profile = {
  placeholder: false,
  name: "Dileep Rajoriya",
  role: "AI Full Stack Engineer",
  headline: "I build full-stack web applications.",
  summary:
    "I am a software development engineer at Swageazy in Gurugram. I build with TypeScript, React, Next.js, and Node, including APIs, databases, and background jobs.",
  location: "Gurugram, Haryana, India",
  availability: "Open for freelance projects and full-time roles",
  responseTime: "Replies within 24 hours",
  lookingFor:
    "A full-time role where I can own features across the interface, the API, and the background jobs.",
  email: "dileeprajoriya@gmail.com",
  personalEmail: "dileeprajoriya2020@gmail.com",
  phone: "+91 97542 64434",
  phoneDisplay: "9754264434",
  phoneHref: "tel:+919754264434",
  whatsappHref: "https://wa.me/919754264434",
  socials: {
    github: "https://github.com/Er-Dileep-rajoriya",
    linkedin: "https://www.linkedin.com/in/dileep-rajoriya-a63a561ba",
  },
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dileeprajoriya.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  updated: "2026-10-24",
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Amazon Web Services",
  ],
};

export function socialLinks() {
  const links = [
    profile.socials.github
      ? { label: "GitHub", href: profile.socials.github }
      : null,
    profile.socials.linkedin
      ? { label: "LinkedIn", href: profile.socials.linkedin }
      : null,
  ];

  return links.filter(
    (link): link is { label: string; href: string } => link !== null,
  );
}

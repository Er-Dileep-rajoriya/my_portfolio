import { pageCopy } from "@/content/pages";
import { profile, socialLinks } from "@/content/profile";
import type { Project } from "@/content/projects";
import { faqs, services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export function personId() {
  return `${absoluteUrl("/")}#person`;
}

export function personNode() {
  const sameAs = socialLinks().map((link) => link.href);

  return {
    "@type": "Person",
    "@id": personId(),
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: absoluteUrl("/"),
    email: profile.email,
    telephone: profile.phone,
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    knowsAbout: [...profile.knowsAbout],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: profile.name,
    url: absoluteUrl("/"),
    description: pageCopy.home.description,
    inLanguage: "en",
    publisher: { "@id": personId() },
  };
}

export function profilePageNode() {
  return {
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/about")}#profile`,
    url: absoluteUrl("/about"),
    name: pageCopy.about.title,
    description: pageCopy.about.description,
    mainEntity: { "@id": personId() },
  };
}

export function contactPageNode() {
  return {
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#contact`,
    url: absoluteUrl("/contact"),
    name: pageCopy.contact.title,
    description: pageCopy.contact.description,
    mainEntity: { "@id": personId() },
  };
}

export function servicesNode() {
  return {
    "@type": "ItemList",
    name: pageCopy.services.title,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: absoluteUrl("/services"),
        provider: { "@id": personId() },
      },
    })),
  };
}

export function faqNode() {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function projectNode(project: Project) {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/projects/${project.slug}`)}#work`,
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    ...(project.url ? { sameAs: project.url } : {}),
    ...(project.year ? { datePublished: `${project.year}-01-01` } : {}),
    keywords: project.stack.join(", "),
    author: { "@id": personId() },
    creator: { "@id": personId() },
  };
}

export function workListNode(items: Project[]) {
  return {
    "@type": "ItemList",
    name: pageCopy.projects.title,
    itemListElement: items.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

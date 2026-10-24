import type { Metadata } from "next";
import { profile } from "@/content/profile";

export function absoluteUrl(path = "/") {
  const base = profile.siteUrl.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  index,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const label =
    typeof title === "string" ? `${title} — ${profile.name}` : title.absolute;

  return {
    title,
    description,
    alternates: { canonical },
    ...(index === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: label,
      description,
      url: canonical,
      type: "website",
      siteName: profile.name,
      locale: profile.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
    },
  };
}

export function canIndex() {
  if (profile.placeholder) return false;

  try {
    return new URL(profile.siteUrl).hostname !== "example.com";
  } catch {
    return false;
  }
}

export function indexingRobots(): Metadata["robots"] {
  if (!canIndex()) {
    return { index: false, follow: false };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

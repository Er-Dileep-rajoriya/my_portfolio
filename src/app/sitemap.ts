import type { MetadataRoute } from "next";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: profile.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...navigation
      .filter((item) => item.href !== "/" && item.href !== "/blog" && !item.href.includes("#"))
      .map((item) => ({
      url: absoluteUrl(item.href),
      lastModified: profile.updated,
      changeFrequency: "monthly" as const,
      priority: item.href === "/projects" ? 0.8 : 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: project.updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...(posts.length > 0
      ? [
          {
            url: absoluteUrl("/blog"),
            lastModified: profile.updated,
            changeFrequency: "monthly" as const,
            priority: 0.5,
          },
        ]
      : []),
  ];
}

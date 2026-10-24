import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { absoluteUrl, canIndex } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!canIndex()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(profile.siteUrl).host,
  };
}

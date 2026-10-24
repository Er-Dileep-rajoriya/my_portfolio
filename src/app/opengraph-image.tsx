import { profile } from "@/content/profile";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = `${profile.name} — ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgCard({
    kicker: profile.availability,
    title: profile.headline,
    footer: `${profile.name} — ${profile.role}`,
  });
}

import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { getProject } from "@/content/projects";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";

export const alt = `Case study by ${profile.name}`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return renderOgCard({
    kicker: "Case study",
    title: project.title,
    footer: `${profile.name} — ${profile.role}`,
  });
}

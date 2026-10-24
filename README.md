# Portfolio

SEO-ready Next.js portfolio for freelance clients and full-time hiring. Tailwind CSS v4 styles the UI. Facts live in `src/content`.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you publish

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real origin, with no trailing slash.
2. Replace `src/content/profile.ts`, `projects.ts`, `experience.ts`, and `services.ts` with your own facts.
3. Set `placeholder` to `false` in `profile.ts`. Until then the site is `noindex` and `robots.txt` disallows crawling, because the case studies are samples.

## Agents

`AGENTS.md` and `.cursor/rules/` define the design system, SEO, content voice, and Next.js 16 conventions. Read those before changing layout or copy.

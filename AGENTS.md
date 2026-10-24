<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio agents

Follow `.cursor/rules/seo.mdc` and `.cursor/rules/theme.mdc`. Do not weaken, delete, or bypass either rule unless the user explicitly asks to change that rule.

The visual reference is [roshis.dev](https://www.roshis.dev/). Match its layout, type, color, and motion. Use Dileep Rajoriya’s name, facts, and copy.

## How to change the site

1. Read the matching guide in `node_modules/next/dist/docs/` before using a Next.js API.
2. Put copy changes in `src/content`. Pages, metadata, the sitemap, robots, and JSON-LD read from there.
3. Pass `seo.mdc` before finishing: one `h1`, a unique 140–160 character description, a canonical URL, and the schema, sitemap, and indexing rules in that file.
4. Pass `theme.mdc`: colors, type, and fonts come from `src/app/globals.css`. Do not add a new color or font.

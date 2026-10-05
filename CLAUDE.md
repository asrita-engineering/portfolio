# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm install` — dependencies are locked in `package-lock.json`; `node_modules` must exist before reading the bundled Next.js docs that AGENTS.md points to (`node_modules/next/dist/docs/`).
- `npm run dev` — dev server at http://localhost:3000 (also regenerates the AGENTS.md block).
- `npm run build` — production build; also type-checks.
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`, Next core-web-vitals + TypeScript rules).
- `npx tsc --noEmit` — standalone type check.

There is no test framework configured.

## Stack

Next.js 16 (App Router, `src/app/`), React 19, TypeScript (strict), Tailwind CSS v4 via `@tailwindcss/postcss`. Path alias `@/*` → `src/*`. Layout props use Next's generated global type helpers (e.g. `LayoutProps<"/">`) rather than hand-written prop types.

## Architecture

This is a single-page personal portfolio (Platform Engineering / Cloud / DevOps).

- `src/app/page.tsx` is the homepage: anchor-linked sections (`hero`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`). Profile and skills data are constants at the top of the file; the experience timeline entries are written directly in the JSX (newest first; the current role gets `timeline-item-current`).
- Projects live in `src/content/projects.ts` as a typed `Project[]`. Each has a `status` (`complete` / `in-progress` / `planned`) and an optional `caseStudy`. Projects with a `caseStudy` get a "Read case study" link on their card and a statically generated page at `src/app/projects/[slug]/page.tsx` (`generateStaticParams` + `dynamicParams = false`, so other slugs 404). To add a case study, add the `caseStudy` object; no routing changes are needed.
- `src/components/` holds the shared `SiteHeader`, `SiteFooter`, `ProjectCard` and `StatusBadge`. Nav links use `/#section` so they work from case-study pages too.
- `src/app/globals.css` holds nearly all styling as plain CSS with design tokens on `:root` (colors, `--font-sans`/`--font-mono` from the Geist font variables, `--content-width`, `--gutter`, `--radius`). Tailwind is imported but used only for a few utility classes in `layout.tsx`.
- Styling is class-based and built from shared pieces: `.eyebrow` (mono section label), `.prose`, `.button`/`.button-primary` inside `.button-row`, `.card` inside `.card-grid`, and `.tag` inside `.tag-list`. Reuse these for new sections instead of adding one-off rules.
- Mobile layout is handled by a single `@media (max-width: 700px)` block near the end of `globals.css`, followed by a `prefers-reduced-motion` block.
- `src/app/layout.tsx` loads Geist fonts via `next/font/google`; its `metadata` is still the create-next-app default.

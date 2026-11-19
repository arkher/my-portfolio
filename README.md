# paulo-gomes.dev

Personal site of Paulo Gomes, Tech Lead and Senior Software Engineer.

## Stack

- **Next.js 16** (App Router, static rendering) and **React 19**
- **Tailwind CSS 4** with **shadcn/ui** conventions (`components.json`, `src/components/ui`)
- **Motion** for animation and **Lenis** for inertial scrolling
- Self-hosted variable fonts: Bricolage Grotesque and Instrument Sans (SIL OFL)
- **Vitest** for unit tests, **ESLint** (flat config) and strict **TypeScript**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Development server                   |
| `npm run build`     | Production build                     |
| `npm test`          | Unit tests (pure helpers in `src/lib`) |
| `npm run lint`      | ESLint                               |
| `npm run typecheck` | TypeScript, no emit                  |

## Project layout

```
src/
  app/              global styles, favicon
  app/[lang]/       localized layout + page (/en, /pt), statically generated
  content/          en.ts, pt.ts (copy per locale), shared.ts (facts), types.ts (Content shape)
  components/
    sections/       hero, work, about, skills, research, contact
    ui/             shadcn-style primitives (button, badge)
    motion-primitives.tsx   word reveal, reveal-on-scroll, count-up, magnetic
    hero-devices.tsx        animated phone + dashboard illustration
  hooks/            use-active-section
  proxy.ts          sends / and legacy paths to the visitor's language
  lib/              pure helpers (utils, geometry, motion presets) + tests
  fonts/            self-hosted woff2 files
```

## Conventions

- **Functional style.** Components are plain functions of their props; content lives in `src/content/profile.ts` as
  readonly data. Helpers in `src/lib` are pure and unit tested. No classes, no mutation (`toggleId` returns a new
  array, etc.). ESLint enforces `prefer-const` and `no-param-reassign`.
- **Updating content.** Edit `src/content/en.ts` and `src/content/pt.ts` (words) or `src/content/shared.ts`
  (companies, dates, stacks, links). Both locales must satisfy the `Content` type, so a missing translation
  fails the build.
- **Languages.** English (`/en`) and Portuguese (`/pt`). `/` redirects using the saved choice (`NEXT_LOCALE`
  cookie, set by the switcher), then `Accept-Language`, then English. Pages declare `hreflang` alternates.
- **Motion.** Shared easing and variants live in `src/lib/motion.ts`. Every animation respects
  `prefers-reduced-motion`, and smooth scrolling is turned off for those users.
- **Résumé.** `public/Paulo_Gomes_CV.pdf` (EN) and `public/Paulo_Gomes_Curriculo.pdf` (PT), linked per locale.

## Deploy

Pushing to the production branch deploys on Vercel; any other branch gets a preview URL.

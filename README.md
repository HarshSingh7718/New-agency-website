# RapidGroDigital — Agency Website

RapidGroDigital built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

Original production CSS, WebGL hero smoke, marquees, carousels, FAQ accordion, magnetic buttons, and section markup are preserved so layout, type, color, and motion match the live site.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4 (utilities only; site theme comes from `/public/css`)
- Original site scripts (`hero-smoke.js`, `apart-steps.js`, `team.js`, `custom.js`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm start`    | Run production server    |

## Project structure

```
src/app/page.tsx          Home page (mirrored markup + scripts)
src/app/contact/page.tsx  Contact page
src/lib/home-body.ts      Full home HTML from production
public/css/               Original theme & section styles
public/js/                Hero smoke, team slider, site behaviour
public/images/            Logo, team photos, portfolio shots
```

## Notes

- Fonts: Urbanist, Instrument Serif, Great Vibes (Google Fonts) — same as production.
- Portfolio images are served locally under `/images/portfolio`.
- The live site’s Blog nav points to `#journal`; that section is not present on the source homepage, so it is not invented here.

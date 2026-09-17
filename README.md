# Brian Mathew De Jesus — Portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

## Status

Stage 1 of the build: project setup, design tokens, navbar, and hero section.
About, Skills, Projects, Process, Learning, and Contact sections come next.

## Getting started

```bash
npm install
npm run dev       # starts a local dev server, usually at http://localhost:5173
```

Other commands:

```bash
npm run build      # type-checks and builds a production bundle into dist/
npm run preview    # serves the production build locally to sanity-check it
```

## Where things live

```
src/
  config/site.ts      <- EVERY external link, name, and project fact lives here.
                         Edit this file only -- no other file needs to change
                         when you add your real GitHub/Tableau/resume links.
  components/          Shared UI: Navbar, Container, SectionHeader, BrandIcons
  sections/            One file per page section (Hero so far)
  assets/images/       Put your graduation photo here
  assets/dashboards/   Put Tableau dashboard screenshots here
public/
  resume/              Drop your resume PDF here, then point
                        site.links.resume at "/resume/your-file.pdf"
                        and set site.resumeReady to true
```

## Design tokens

Defined in `src/index.css` under `@theme`:

- `paper` `#faf9f6` -- background
- `ink` `#171a1f` -- primary text
- `slate` / `slate-light` -- secondary text
- `line` `#e2e1d9` -- hairline borders (no drop shadows are used anywhere)
- `ledger` `#2f5d45` -- the one accent color, used for links, buttons, active states
- `rust` `#8c4a3d` -- reserved for negative/risk data points inside the churn
  dashboard only, never used as UI chrome

Fonts: IBM Plex Sans (headings + body) and IBM Plex Mono (data labels, KPI
numbers, tool tags), loaded via Google Fonts in `index.html`.

## Placeholders still needed

All marked `REPLACE_ME` in `src/config/site.ts`:

- GitHub profile + per-project repo links
- Tableau Public profile link
- Resume file or link (and flip `resumeReady` to `true`)
- Graduation photo -> `src/assets/images/`
- Dashboard screenshots -> `src/assets/dashboards/`

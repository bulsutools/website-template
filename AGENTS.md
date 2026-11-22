# campus.tools Agent Guide

**Human developers:** start with [README.md](README.md).

This is a template for a student-run open-source tools collective's org landing
site. Before shipping a fork, replace every placeholder: `campus.tools`,
`campus-tools`, `app.campus.tools`, "Example University", and the sample
content in `src/data/` and `src/pages/transparency.astro`.

## Doc map

| When | Read |
| --- | --- |
| Site structure | `src/pages/`, `src/components/` |
| Global styles | [src/styles/global.css](src/styles/global.css) |
| Messenger short links | [workers/messenger-redirect/](workers/messenger-redirect/) (Cloudflare Worker) |

## Stack

- **Framework:** Astro (static org landing)
- **Node:** ≥ 22.12
- **Package manager:** npm (`package-lock.json`)
- **Deploy:** Vercel (org hub at `campus.tools`)
- **Edge:** Cloudflare Workers in `workers/` for subdomain redirects (e.g. `messenger.campus.tools`)

## Branches and deploy

- **Default branch:** `main` → Vercel production on merge
- Feature work: branch → PR to `main`
- No `staging` branch today: use Vercel preview on the PR

Community URLs referenced across the site:

- Discord → `https://discord.campus.tools`
- Messenger short links → `https://messenger.campus.tools/{contribute,maintain}`
- Flagship app → `https://app.campus.tools`

## Verify before done

| Step | When |
| --- | --- |
| `npm run build` | Before commit/PR on substantive changes |
| `npm run dev` | UI/content changes: spot-check locally |
| 320px / 768px | Layout changes: no overflow; text wraps or truncates |
| Worker deploy | After editing `workers/*`: redeploy via Wrangler (see worker README) |

## UI guardrails

- **No decorative animations**: functional transitions only
- Buttons and chips must stay inside containers at narrow widths

## Architecture (short)

```
src/
 components/ # Hero, Tools, Community, Footer, …
 layouts/ # Layout.astro
 pages/ # index.astro, about, people, press, privacy, terms, transparency
 data/ # tools.ts and press.ts: sample content, replace with yours
 styles/ # global.css
workers/
 messenger-redirect/ # Cloudflare Worker for messenger.campus.tools
public/ # favicon, screenshots, hero photo
```

## Commits

- Conventional Commits: `feat(hero): …`, `fix(worker): …`, `docs: …`
- Update README when changing scripts, deploy steps, or community URLs

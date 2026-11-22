# campus.tools

Org landing site template for a student-run open-source tools collective. Fork this repo, replace the placeholders (`campus.tools`, `campus-tools`, `app.campus.tools`, "Example University"), and point it at your own campus community.

## Stack

- Astro (static)
- Node ≥ 22.12
- npm (`package-lock.json`)
- Vercel for production
- Cloudflare Workers in `workers/` for subdomain redirects (for example `messenger.campus.tools`)

## Develop

```sh
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Local server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the build |
| `npm run generate:og` | Regenerate Open Graph images |

## Deploy

- Default branch: `main` → Vercel production
- Feature work: branch → PR to `main`
- After editing `workers/*`, redeploy the Worker with Wrangler (see the worker README)

## Customizing for your org

Search the repo for `campus.tools`, `campus-tools`, and `Example University` and replace them with your domain, GitHub org, and campus name. Also swap the sample content:

- `src/data/tools.ts` and `src/data/press.ts`: example entries, replace with your real projects and team
- `src/pages/transparency.astro`: sample ledger, replace with your real reports
- `public/`: screenshots, hero photo, and icons still show the template's placeholder imagery
- `.github/workflows/deploy-cloudflare.yml`: Cloudflare Pages project name
- `vercel.json` and `public/_redirects`: canonical domain redirects
- `workers/messenger-redirect/`: Worker name, route pattern, and redirect targets

## License

See [LICENSE](LICENSE).

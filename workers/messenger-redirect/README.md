# messenger.campus.tools redirects

Cloudflare Worker for role-specific Messenger group chat short links.

| Path | Target |
| ---- | ------ |
| `/contribute` | Contributors group chat |
| `/maintain` | Maintainers group chat |
| `/` (default) | Contributors group chat |


## Deploy

```sh
cd workers/messenger-redirect
wrangler deploy
```

Uses a **Custom Domain** (`custom_domain = true`) so Cloudflare creates the `messenger` DNS record automatically. Requires Cloudflare account access to the `campus.tools` zone.

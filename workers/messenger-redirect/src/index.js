/** TODO(template): replace with your real Messenger group links. */
const REDIRECTS = {
  "/contribute": "https://m.me/j/YOUR_CONTRIBUTE_GROUP/",
  "/maintain": "https://m.me/j/YOUR_MAINTAIN_GROUP/",
};

const DEFAULT = REDIRECTS["/contribute"];

export default {
  async fetch(request) {
    const path = new URL(request.url).pathname.replace(/\/$/, "") || "/";
    const target = REDIRECTS[path] ?? DEFAULT;
    return Response.redirect(target, 302);
  },
};

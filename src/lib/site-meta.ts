export const SITE_ORIGIN = "https://www.campus.tools";
export const SITE_NAME = "campus.tools";

export const DEFAULT_TITLE = "campus.tools";
export const DEFAULT_DESCRIPTION =
  "Open-source campus tools built by students. Free utilities, MIT-licensed on GitHub, and this isn't an official university site.";

export const DEFAULT_OG_IMAGE = "/og.png";
export const DEFAULT_OG_IMAGE_ALT =
  "campus.tools, open-source tools for your campus";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string, origin = SITE_ORIGIN): string {
  return new URL(path, origin).href;
}

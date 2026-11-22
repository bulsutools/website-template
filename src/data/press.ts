/**
 * Press kit content.
 *
 * TEMPLATE DATA: every name, bio, link and figure below is a placeholder.
 * Replace with your real team, real verified numbers, and real headshots
 * (drop them in public/press/ and set `headshot` / `headshotFull`).
 *
 * Rule for this file: verified numbers only. If a figure cannot be pointed at
 * a source (your analytics, the GitHub API, a row count), it does not go in.
 * Editors quote whatever is here, and a number invented once gets repeated for
 * years.
 */

export type CoreMember = {
  name: string;
  /** What they actually work on. Plain scope, not a rank. */
  role: string;
  /**
   * A sentence or two an editor can quote or paraphrase.
   *
   * Every bio below is a DRAFT written only from what the repository shows
   * (commit history and the work each person shipped). Nobody's course, year,
   * background, or interests are invented here. Each person should replace
   * their own line with whatever they actually want printed about them, and
   * should see this page before it is handed to a publication.
   */
  bio: string;
  /** Optional headshot in public/press/. Renders initials until one exists. */
  headshot?: string;
  /** Full-resolution original of the headshot, offered as a download for print. */
  headshotFull?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  /** Personal site or portfolio. Checked live before being listed here. */
  website?: string;
};

/**
 * The named core team, decided in advance rather than assembled under a
 * deadline. This is the list that goes out with every press submission.
 *
 * Roles are scope, not rank. Deliberately no titles: a small student team
 * that invents "Lead Frontend Developer" only creates something it has to
 * revoke later.
 */
export const coreTeam: CoreMember[] = [
  {
    name: "Alex Example",
    role: "Founder and lead. App architecture, campus data pipeline, releases.",
    bio: "Alex started the flagship app and is still its largest contributor. They work on app architecture, the campus data pipeline, and the release process.",
    github: "example-user",
    website: "https://example.edu",
  },
  {
    name: "Sam Example",
    role: "Map, interface, bug fixes.",
    bio: "Sam works on the map and interface, and on the bug fixes that keep each term's release stable.",
    github: "example-user-2",
  },
];

/**
 * Named design credit. Not core, but a large enough body of design work that
 * the flat contributor list below would undersell it. Kept as its own clause
 * so the tiers stay honest in both directions.
 */
export const designCredits: CoreMember[] = [
  {
    name: "Design Example",
    role: "Interface design.",
    bio: "Did interface design across the org's tools.",
  },
];

/**
 * People who built one of the other campus.tools apps. Listed under their app
 * rather than under the flagship core, since that is what they made.
 */
export const toolBuilders: (CoreMember & { tool: string })[] = [
  {
    tool: "Example Tool",
    name: "Casey Example",
    role: "Built and maintains Example Tool.",
    bio: "Casey built Example Tool, a campus utility. They have also contributed to the flagship app.",
    github: "example-user-3",
  },
];

export type NamedContributor = {
  name: string;
  /** What they did, in plain words. */
  role: string;
  facebook?: string;
  website?: string;
};

/**
 * People whose work never lands as a commit: publication graphics, building
 * data, room directions. The GitHub list cannot see them, which is the whole
 * reason this list is kept by hand. Add a line when someone does something.
 */
export const namedContributors: NamedContributor[] = [
  {
    name: "Example Contributor",
    role: "Building data",
  },
];

/** Short version. Fits a caption or a lede. */
export const boilerplateShort =
  "campus.tools is a student-led open-source collective. Its flagship tool is a campus map that tells you where a room is, which is the question every student asks during enlistment.";

/** Long version. Fits an "about the project" paragraph at the end of a piece. */
export const boilerplateLong =
  "campus.tools is an independent, student-led open-source collective, not affiliated with or endorsed by the university administration. It maintains a campus map with room search, class schedules, a planner, and transit routes that keeps working offline, plus a browser extension for grade simulation and several smaller campus tools. Everything is MIT-licensed on GitHub, and the campus map data is published as open data under CC-BY 4.0.";

/**
 * The credit line. Send this with every submission and it removes the question
 * of who gets named, permanently, from every future deadline.
 */
export const creditLine = `Our tools are built by students under campus.tools. Core team: ${coreTeam
  .map((member) => member.name)
  .join(", ")}. Design by ${designCredits
  .map((member) => member.name)
  .join(", ")}. Full contributor list at campus.tools/press.`;

export type Fact = { value: string; label: string; source: string };

/**
 * TODO: replace every figure below with a real, sourced number before this
 * page goes live. Editors quote whatever is here, and a number invented once
 * gets repeated for years.
 */
export const facts: Fact[] = [
  {
    value: "—",
    label: "monthly page views (replace with your analytics figure)",
    source: "your web analytics",
  },
  {
    value: "—",
    label: "buildings mapped, searchable, and routable",
    source: "your app data",
  },
  {
    value: "—",
    label: "class sections imported across terms",
    source: "your app data",
  },
  { value: "—", label: "contributors, tagged releases", source: "GitHub" },
  { value: "—", label: "campuses running forks", source: "GitHub" },
  { value: "—", label: "first commit", source: "Git history" },
];

export type PressScreenshot = {
  src: string;
  alt: string;
  /** Caption an editor can paste as-is. */
  caption: string;
  width: number;
  height: number;
};

export const screenshots: PressScreenshot[] = [
  {
    src: "/campus-map-screenshot.png",
    alt: "Campus map with pins for buildings, dorms, offices, and transit routes",
    caption:
      "The campus map shows every building. Students search a room code, a building nickname, or a course.",
    width: 1800,
    height: 1000,
  },
  {
    src: "/campus-map-schedule.png",
    alt: "Weekly schedule for a room, showing lecture and lab sections across the week",
    caption:
      "Every room shows its weekly schedule and written walking directions, so students know which floor and which entrance.",
    width: 1800,
    height: 1000,
  },
  {
    src: "/grade-sim-screenshot.png",
    alt: "Grade simulator extension working inside the student portal",
    caption:
      "The grade simulator works inside the student portal. Calculations stay on the student's device.",
    width: 1200,
    height: 700,
  },
];

export type LogoAsset = {
  src: string;
  label: string;
  note: string;
  /** Pixel size of the file, so the preview keeps its real aspect ratio. */
  width: number;
  height: number;
};

export const logos: LogoAsset[] = [
  {
    src: "/icon.png",
    label: "App icon",
    note: "PNG, square. Use on light backgrounds.",
    width: 458,
    height: 512,
  },
  {
    src: "/icon-512.png",
    label: "App icon, 512px",
    note: "PNG. For print or large layouts.",
    width: 512,
    height: 512,
  },
  {
    src: "/og.png",
    label: "Social card",
    note: "1200x630 PNG. For link previews.",
    width: 1200,
    height: 630,
  },
];

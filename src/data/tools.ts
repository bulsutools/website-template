export type ToolStatus = "active" | "live";

export type ToolStat = {
  value: string;
  label: string;
};

export type ToolEntry = {
  id: string;
  name: string;
  description: string;
  href: string;
  githubHref?: string;
  actionLabel: string;
  status: ToolStatus;
  statusLabel: string;
  tags: string[];
  screenshot: string;
  screenshotAlt: string;
  /** Real, verified numbers only. Shown on the flagship card. */
  stats?: ToolStat[];
  /** Short trailing line for the flagship card. */
  note?: string;
};

/**
 * Example entries. Replace with your org's real projects, URLs, stats and
 * screenshots before shipping. Keep `stats` limited to numbers you can point
 * at a source for.
 */
export const tools: ToolEntry[] = [
  {
    id: "campus-map",
    name: "Campus Map",
    description:
      "Search a room, a building nickname or a course and see it on the campus map. It also has room schedules, a class planner and transit routes, and it keeps working when the signal drops.",
    href: "https://app.campus.tools",
    githubHref: "https://github.com/campus-tools/campus-map",
    actionLabel: "Open the map",
    status: "active",
    statusLabel: "Active",
    tags: ["Map", "Open source"],
    screenshot: "/campus-map-screenshot.png",
    screenshotAlt: "Campus map with room search and building pins",
    stats: [
      { value: "—", label: "monthly page views" },
      { value: "—", label: "buildings mapped" },
      { value: "—", label: "class sections" },
    ],
    note: "Replace this note with a real milestone.",
  },
  {
    id: "food-finder",
    name: "Food Finder",
    description:
      "Pick where you are, your next class and how long you have, and get only the food stops that fit the walk.",
    href: "https://food.campus.tools",
    actionLabel: "Open app",
    status: "active",
    statusLabel: "Active",
    tags: ["Food"],
    screenshot: "/food-finder-screenshot.png",
    screenshotAlt:
      "Food finder choosing a building, next class, and break time to find food stops",
  },
  {
    id: "grade-sim",
    name: "Grade Simulator",
    description:
      "This browser extension sits on top of the student portal grades page and simulates your standing against your targets.",
    href: "https://grades.campus.tools",
    githubHref: "https://github.com/campus-tools/grade-sim",
    actionLabel: "Install extension",
    status: "active",
    statusLabel: "Active",
    tags: ["Extension", "Open source"],
    screenshot: "/grade-sim-screenshot.png",
    screenshotAlt: "Grade simulator extension",
  },
  {
    id: "campus-directory",
    name: "Campus Directory",
    description:
      "Search hundreds of campus websites, offices, resources and student organizations.",
    href: "https://directory.campus.tools",
    actionLabel: "Visit website",
    status: "active",
    statusLabel: "Active",
    tags: ["Directory"],
    screenshot: "/directory-screenshot.png",
    screenshotAlt:
      "Campus directory search engine page showing category tags and search results",
  },
];

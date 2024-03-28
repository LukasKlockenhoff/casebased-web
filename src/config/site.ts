export const siteConfig = {
  name: "Case Based",
  url: "https://casebased.org/",
  ogImage: "https://dev.casebased.org/og.png",
  description:
    "Teaching and learning resources for case-based learning in computer science.",
  navigation: {
    docs: "/docs",
    examples: "/examples",
    roadmaps: "/roadmaps",
  },
  external: {
    github: "https://github.com/lukasklockenhoff",
  },
};

export type SiteConfig = typeof siteConfig;

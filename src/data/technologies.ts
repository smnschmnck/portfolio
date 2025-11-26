import {
  siAstro,
  siCloudflare,
  siGo,
  siHtmx,
  siNodedotjs,
  siPostgresql,
  siPusher,
  siReact,
  siSqlite,
  siSvelte,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const technologies = {
  ts: {
    icon: siTypescript,
    name: "typescript",
  },
  go: {
    icon: siGo,
    name: "golang",
  },
  react: {
    icon: siReact,
    name: "react",
  },
  nodejs: {
    icon: siNodedotjs,
    name: "node.js",
  },
  cloudflare: {
    icon: siCloudflare,
    name: "cloudflare functions",
  },
  htmx: {
    icon: siHtmx,
    name: "htmx",
  },
  astro: {
    icon: siAstro,
    name: "astro",
  },
  svelte: {
    icon: siSvelte,
    name: "svelte",
  },
  pusher: {
    icon: siPusher,
    name: "pusher channels",
  },
  postgres: {
    icon: siPostgresql,
    name: "postgresql",
  },
  sqLite: {
    icon: siSqlite,
    name: "sqLite",
  },
  tailwind: {
    icon: siTailwindcss,
    name: "tailwind",
  },
} satisfies Record<string, { icon: SimpleIcon; name: string }>;

export type Technology = keyof typeof technologies;

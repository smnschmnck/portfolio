import {
  siCloudflare,
  siGo,
  siHtmx,
  siNodedotjs,
  siPostgresql,
  siPusher,
  siReact,
  siSvelte,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const technologies = {
  ts: {
    icon: siTypescript,
  },
  go: {
    icon: siGo,
  },
  react: {
    icon: siReact,
  },
  nodejs: {
    icon: siNodedotjs,
  },
  cloudflare: {
    icon: siCloudflare,
  },
  htmx: {
    icon: siHtmx,
  },
  svelte: {
    icon: siSvelte,
  },
  pusher: {
    icon: siPusher,
  },
  postgres: {
    icon: siPostgresql,
  },
  tailwind: {
    icon: siTailwindcss,
  },
} satisfies Record<string, { icon: SimpleIcon }>;

export type Technology = keyof typeof technologies;

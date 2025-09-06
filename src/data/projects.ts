import type { Technology } from "./technologies";

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "emyht",
    description: "realtime chat application",
    technologies: ["ts", "go", "react", "pusher", "postgres", "tailwind"],
    href: "https://emyht.com",
  },
  {
    title: "bpm",
    description: "simple bpm tapper",
    technologies: ["ts", "react", "tailwind"],
    href: "https://bpm.s12k.de/",
  },
  {
    title: "roundest",
    description: "vote for the roundest pokémon",
    technologies: ["go", "htmx", "tailwind"],
    href: "https://roundest.s12k.de/",
  },
  {
    title: "acme store",
    description: "e-commerce store without client side javascript",
    technologies: ["ts", "svelte", "tailwind"],
    href: "https://acme-store.s12k.de/",
  },
  {
    title: "chirp",
    description: "twitter clone",
    technologies: ["ts", "react", "cloudflare", "tailwind"],
    href: "https://chirp.s12k.de/",
  },
  {
    title: "tic tac toe",
    description: "realtime multiplayer online tic tac toe",
    technologies: ["ts", "react", "nodejs"],
    href: "https://tictactoe.s12k.de/",
  },
];

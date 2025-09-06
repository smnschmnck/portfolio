export type Technology = "TS" | "GO";

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  href: string;
};

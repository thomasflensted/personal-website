export type Technology =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NextJs"
  | "NodeJs"
  | "PostgreSQL"
  | "MongoDB"
  | "TailwindCSS"
  | "Framer_Motion"
  | "OpenAI"
  | "AWS";

export type Project = {
  title: string;
  shortDesc: string;
  link: string;
  languages: Technology[];
  githubLink?: string;
  year: number;
};

export const portfolio: Project[] = [
  {
    title: "X++",
    shortDesc: "Twitter/X clone, but with AI",
    link: "https://next-twitter-indol.vercel.app/",
    languages: [
      "NextJs",
      "TypeScript",
      "PostgreSQL",
      "OpenAI",
      "AWS",
      "TailwindCSS",
    ],
    githubLink: "https://github.com/thomasflensted/next-twitter",
    year: 2024,
  },
  {
    title: "Mapper",
    shortDesc: "Remember the places that matter",
    link: "https://next-mapper.vercel.app/",
    languages: ["NextJs", "TypeScript", "PostgreSQL", "TailwindCSS"],
    githubLink: "https://github.com/thomasflensted/next-mapper",
    year: 2024,
  },
  {
    title: "Random HN Stories",
    shortDesc: "Playing around with the Hacker News API",
    link: "https://random-hackernews-stories.vercel.app/",
    languages: ["NextJs", "TypeScript", "Framer_Motion", "TailwindCSS"],
    githubLink: "https://github.com/thomasflensted/random-hackernews-stories",
    year: 2024,
  },
  {
    title: "ProjecTiles",
    shortDesc: "Your online bulletin board",
    link: "https://www.projectiles.app/",
    languages: ["React", "MongoDB", "NodeJs"],
    githubLink: "https://github.com/thomasflensted/projectiles",
    year: 2024,
  },
  {
    title: "Infinite Wordle",
    shortDesc: "Play Wordle as many times as you want",
    link: "https://wordle-j012.onrender.com/",
    languages: ["React", "NodeJs", "Framer_Motion"],
    githubLink: "https://github.com/thomasflensted/wordle",
    year: 2024,
  },
  {
    title: "annearndt.dk",
    shortDesc: "Personal website for my girlfriend who's a journalist",
    link: "https://annearndt.dk/",
    languages: ["React", "TypeScript", "TailwindCSS"],
    githubLink: "https://github.com/thomasflensted/anne-website",
    year: 2024,
  },
  {
    title: "My Todo Now",
    shortDesc: "All your lists organized with no frills",
    link: "https://todo-app-pydr.onrender.com",
    languages: ["React"],
    githubLink: "https://github.com/thomasflensted/todo-app",
    year: 2024,
  },
  {
    title: "Adobe After Effects Scripts",
    shortDesc: "Speed up your motion graphics workflow",
    link: "https://thomasflensted.gumroad.com/",
    languages: ["JavaScript"],
    year: 2022,
  },
];

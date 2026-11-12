import React from "react";

const projects = [
  {
    name: "Flokk",
    href: "https://joinflokk.com",
    meta: "iOS, Android and web",
    description:
      "Clubs post their group rides and runs, and people find and join them. It has 2,500 users in Oslo. I build and run all of it alone, from the apps to the Go API behind them.",
  },
  {
    name: "Flick",
    href: "https://thomasflensted.github.io/flick/",
    meta: "macOS",
    description:
      "A small, fast launcher I built to replace Raycast. It opens apps, quicklinks and snippets, keeps a clipboard history, and has an AI chat that can change its own settings.",
  },
  {
    name: "Shelf",
    href: "https://thomasflensted.github.io/shelf/",
    meta: "macOS",
    description:
      "A plain ebook library covering the parts of Calibre I actually used. It reads covers and metadata from EPUB, MOBI and PDF files, and sends books to a Kindle over USB.",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <div>
              <a className="link" target="_blank" href={project.href}>
                {project.name}
              </a>
              <span className="projects-meta">{project.meta}</span>
            </div>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

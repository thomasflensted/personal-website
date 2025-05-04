import React, { Dispatch, SetStateAction, useState } from "react";
import GitHubLink from "./GitHubLink";
import TitleAndDesc from "./TitleAndDesc";
import Languages from "./Languages";
import { Project } from "./portfolio-content";

type Props = {
  project: Project;
  setIsHovering: Dispatch<SetStateAction<boolean>>;
  setTechnologies: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
};

const PortfolioItem = ({
  project,
  setIsHovering,
  setTechnologies,
  setDescription,
}: Props) => {
  const createTechnologyString = (languageArr, description) => {
    const capArr = languageArr.map((tech) => {
      return tech.split("_").length > 1 ? tech.split("_").join(" ") : tech;
    });
    const str = capArr.join(", ");
    setTechnologies(str);
    setDescription(description);
  };

  const containerClasses =
    "flex items-center w-full gap-2 p-4 transition-all duration-200 ease-in-out rounded-lg justify-evenly hover:bg-gray-200 hover:scale-[1.01]";

  return (
    <div
      key={project.title}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={containerClasses}
      onMouseOver={() =>
        createTechnologyString(project.languages, project.shortDesc)
      }
    >
      {project.githubLink && <GitHubLink link={project.githubLink} />}
      <a
        title={project.link}
        className="flex items-center w-full justify-evenly"
        href={project.link}
        target="_blank"
      >
        <TitleAndDesc
          title={project.title}
          desc={project.shortDesc}
          year={project.year}
        />
        <hr className="flex-grow mx-5 border-gray-300" />
        <Languages languages={project.languages} />
      </a>
    </div>
  );
};
export default PortfolioItem;

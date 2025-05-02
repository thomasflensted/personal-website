import React from "react";
import { portfolio } from "./portfolio-content";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import TechnologiesAndDesc from "./TechnologiesAndDesc";

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col w-full gap-2 md:w-3/4 lg:w-3/4">
      {portfolio.map((project) => (
        <PortfolioItem
          key={project.shortDesc}
          project={project}
          setIsHovering={setIsHovering}
          setDescription={setDescription}
          setTechnologies={setTechnologies}
        />
      ))}
      {isHovering && (
        <TechnologiesAndDesc
          technologies={technologies}
          description={description}
        />
      )}
    </div>
  );
};

export default Portfolio;

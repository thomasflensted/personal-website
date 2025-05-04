import React from "react";
import { portfolio } from "./portfolio-content";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import TechnologiesAndDesc from "./TechnologiesAndDesc";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col w-full gap-2 md:w-3/4 lg:w-3/4">
      <div className="flex justify-center mb-4">
        <p className="text-2xl font-medium text-center">
          These are some of the projects I have built.
          <span className="block font-normal text-xl">
            Get to know more about me&nbsp;
            <Link className="underline" to={"/about"}>
              here
            </Link>
          </span>
        </p>
      </div>
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

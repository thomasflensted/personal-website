import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import React, { Fragment, ReactNode } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { Technology } from "./portfolio-content";
import {
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Languages = ({ languages }: { languages: string[] }) => {
  const languageIcons: Record<Technology, ReactNode> = {
    JavaScript: <IoLogoJavascript />,
    MongoDB: <SiMongodb />,
    React: <FaReact />,
    NodeJs: <FaNodeJs />,
    Framer_Motion: <SiFramer />,
    TypeScript: <SiTypescript />,
    TailwindCSS: <SiTailwindcss />,
    NextJs: <SiNextdotjs />,
    PostgreSQL: <SiPostgresql />,
    OpenAI: <SiOpenai />,
    AWS: <FaAws />,
  };

  return (
    <div className="flex items-center gap-2 text-2xl">
      {languages.map((language) => (
        <Fragment key={language}>{languageIcons[language]}</Fragment>
      ))}
    </div>
  );
};
export default Languages;

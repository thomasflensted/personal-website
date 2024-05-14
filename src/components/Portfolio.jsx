import { portfolio } from "./portfolio-content"
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiFramer, SiTypescript, SiTailwindcss, SiOpenai, SiNextdotjs, SiPostgresql, SiGithub } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { useState } from "react";
import { isBrowser } from "react-device-detect";
import GitHubLink from "./GitHubLink";
import TitleAndDesc from "./TitleAndDesc";
import Languages from "./Languages";

const Portfolio = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [technologies, setTechnologies] = useState('');

    const createTechnologyString = (languageArr) => {
        const capArr = languageArr.map(tech => {
            return tech.split('_').length > 1 ? tech.split('_').join(' ') : tech
        });
        const str = capArr.join(', ');
        setTechnologies(str);
    }

    return (isBrowser
        ? <div className="flex flex-col w-1/2 gap-2">
            {portfolio.map(project =>
                <div onMouseOver={() => createTechnologyString(project.languages)} key={project.title} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className='flex items-center w-full gap-2 px-4 py-4 transition-all duration-200 ease-in-out rounded-lg justify-evenly hover:bg-gray-200 hover:scale-[1.01]'>
                    {project.gh_link && <GitHubLink link={project.gh_link} />}
                    <a className="flex gap-1 whitespace-nowrap" target='_blank' href={project.link}>
                        <TitleAndDesc title={project.title} desc={project.desc} />
                    </a>
                    <div className="project-divider"></div>
                    <Languages languages={project.languages} />
                </div>
            )}
            {isHovering &&
                <p className="technologies">{technologies}</p>}
        </div>
        : <div className="w-11/12">
            {portfolio.map(project =>
                <div onMouseOver={() => createTechnologyString(project.languages)} key={project.title} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className='items-center project'>
                    {project.gh_link &&
                        <a className="" target='_blank' href={project.gh_link}>
                            <SiGithub className="text-2xl" />
                        </a>}
                    <a className="title-and-desc" target='_blank' href={project.link}>
                        <h2 className="project-title">{project.title}</h2>
                    </a>
                    <div className="w-full project-divider"></div>
                    <div className="languages">
                        {project.languages.map(language =>
                            <div className="language" key={language}>
                                {languages[language]}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {isHovering &&
                <p className="technologies">{technologies}</p>}
        </div>
    )
}

export default Portfolio
// title-and-desc
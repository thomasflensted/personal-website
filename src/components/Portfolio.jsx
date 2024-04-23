import { portfolio } from "./portfolio-content"
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiFramer, SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiGithub } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useState } from "react";
import { isBrowser } from "react-device-detect";

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

    const languages = {
        JavaScript: <IoLogoJavascript />,
        MongoDB: <SiMongodb />,
        React: <FaReact />,
        Nodejs: <FaNodeJs />,
        Express: <SiExpress />,
        Framer_Motion: <SiFramer />,
        TypeScript: <SiTypescript />,
        TailwindCSS: <SiTailwindcss />,
        NextJs: <SiNextdotjs />,
        PostgreSQL: <SiPostgresql />
    }

    return (isBrowser
        ? <div className="container">
            {portfolio.map(project =>
                <div onMouseOver={() => createTechnologyString(project.languages)} key={project.title} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className='items-center project'>
                    {project.gh_link &&
                        <a className="" target='_blank' href={project.gh_link}>
                            <SiGithub className="text-2xl" />
                        </a>}
                    <a className="title-and-desc" target='_blank' href={project.link}>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-desc">{project.desc}</p>
                    </a>
                    <div className="project-divider"></div>
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
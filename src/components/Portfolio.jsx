import { portfolio } from "./portfolio-content"
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiFramer, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useState } from "react";

const Portfolio = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [technologies, setTechnologies] = useState('');

    const createTechnologyString = (languageArr) => {
        const capArr = languageArr.map(tech => tech.charAt(0).toUpperCase() + tech.substring(1));
        const str = capArr.join(', ');
        setTechnologies(str);
    }

    const languages = {
        javascript: <IoLogoJavascript />,
        mongo: <SiMongodb />,
        react: <FaReact />,
        node: <FaNodeJs />,
        express: <SiExpress />,
        framer: <SiFramer />,
        typescript: <SiTypescript />,
        tailwind: <SiTailwindcss />
    }

    return (
        <div className="container">
            {portfolio.map(project =>
                <a onMouseOver={() => createTechnologyString(project.languages)} key={project.title} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className='project' target='_blank' href={project.link}>
                    <div className="title-and-desc">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-desc">{project.desc}</p>
                    </div>
                    <div className="project-divider"></div>
                    <div className="languages">
                        {project.languages.map(language =>
                            <div className="language" key={language}>
                                {languages[language]}
                            </div>
                        )}
                    </div>
                </a>
            )}
            {isHovering &&
                <p className="technologies">{technologies}</p>}
        </div >
    )
}

export default Portfolio

/*
<div className = "portfolio-link-to-blog">
    <a target="_blank" href="">Sometimes I write about the process of building these things.</a>
</div>
*/

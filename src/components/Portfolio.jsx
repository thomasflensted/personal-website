import { portfolio } from "./portfolio-content"
import { Link } from "react-router-dom"
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiFramer } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Portfolio = () => {

    const languages = {
        javascript: <IoLogoJavascript />,
        mongo: <SiMongodb />,
        react: <FaReact />,
        node: <FaNodeJs />,
        express: <SiExpress />,
        framer: <SiFramer />
    }

    return (
        <div className="container">
            {portfolio.map(project =>
                <a key={project.title} className='project' target='_blank' href={project.link}>
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
        </div >
    )
}

export default Portfolio

/*
<div className = "portfolio-link-to-blog">
    <a target="_blank" href="">Sometimes I write about the process of building these things.</a>
</div>
*/

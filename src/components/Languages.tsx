import React from "react"
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiOpenai, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"

const Languages = ({ languages }: { languages: string[] }) => {

    const languageIcons = {
        JavaScript: <IoLogoJavascript />,
        MongoDB: <SiMongodb />,
        React: <FaReact />,
        Nodejs: <FaNodeJs />,
        Express: <SiExpress />,
        Framer_Motion: <SiFramer />,
        TypeScript: <SiTypescript />,
        TailwindCSS: <SiTailwindcss />,
        NextJs: <SiNextdotjs />,
        PostgreSQL: <SiPostgresql />,
        OpenAI: <SiOpenai />,
        AWS: <FaAws />
    }

    return (
        <div className="languages">
            {languages.map(language =>
                <div className="language" key={language}>
                    {languageIcons[language]}
                </div>
            )}
        </div>
    )
}
export default Languages
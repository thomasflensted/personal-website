import React, { Fragment } from "react"
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiOpenai, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"
Fragment

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
        <div className="flex items-center gap-2 text-2xl">
            {languages.map(language =>
                <Fragment key={language} >
                    {languageIcons[language]}
                </Fragment>)}
        </div>
    )
}
export default Languages
import React from "react"

const TitleAndDesc = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <>
            <h2 className="project-title">{title}</h2>
            <p className="project-desc">{desc}</p>
        </>
    )
}
export default TitleAndDesc
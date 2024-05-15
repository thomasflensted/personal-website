import React from "react"

const TechnologiesAndDesc = ({ technologies, description }: { technologies: string, description: string }) => {
    return (
        <div className="w-2/3 mt-6 ml-4">
            <p className="text-lg font-light">
                <span className="font-medium">Technologies used: </span>
                {technologies}
            </p>
            <p className="mt-2 ">{description}</p>
        </div>
    )
}
export default TechnologiesAndDesc
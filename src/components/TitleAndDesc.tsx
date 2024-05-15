import React from "react"

const TitleAndDesc = ({ title, desc, year }: { title: string, desc: string, year: number }) => {
    return (
        <div className="flex items-baseline gap-2 whitespace-nowrap">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="hidden text-lg font-light text-gray-500 lg:block">{desc}</p>
            <p className="hidden text-lg lg:block">- {year}</p>
        </div>
    )
}
export default TitleAndDesc
import React from "react"

const TitleAndDesc = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className="flex items-baseline gap-2 whitespace-nowrap">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="hidden text-lg font-light text-gray-500 lg:block">{desc}</p>
        </div>
    )
}
export default TitleAndDesc
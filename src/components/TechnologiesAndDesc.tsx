import React from "react"
import { motion } from 'framer-motion'

const TechnologiesAndDesc = ({ technologies, description }: { technologies: string, description: string }) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .25 }}
            className="w-2/3 mt-6 ml-4">
            <p className="text-lg font-light">
                <span className="font-medium">Technologies used: </span>
                {technologies}
            </p>
            <p className="mt-2 ">{description}</p>
        </motion.div>
    )
}
export default TechnologiesAndDesc
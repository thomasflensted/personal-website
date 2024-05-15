import React from 'react'
import { SiGithub } from 'react-icons/si'

const GitHubLink = ({ link }: { link: string }) => {
    return (
        <a className="" target='_blank' href={link} title='Link to GitHub repository'>
            <SiGithub className="mr-1 text-2xl -translate-y-0.5" />
        </a>
    )
}
export default GitHubLink
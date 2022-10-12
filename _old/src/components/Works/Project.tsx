import type { TechStackItem } from '../../data/technologies/types'

import Comment from '../basic/Comment'
import StackBox from "./StackBox"
import OnHoverOverlay from './OnHoverOverlay'

import { AiFillGithub } from "react-icons/ai"
import { FiLink } from "react-icons/fi"
import { useState } from 'react'

interface Props {
    id: number,
    image: string, 
    name: string, 
    siteLink: string | null, 
    githubLink: string | null, 
    techStack: TechStackItem[],
    description: string
}


const Project: React.FC<Props> = ({id, image, name, siteLink, githubLink, techStack, description}) => {
    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <div className="work-container" onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>

            <div className={`project-image ${showOverlay ? "project-overlay--shown" : ""}`}>
                <OnHoverOverlay {...{name, description, className: showOverlay ? "project-overlay--shown" : ""}}/>
                <img className={showOverlay ? "project-overlay--shown" : ""} src={image} alt={image} />
            </div>

            <Comment>Tech stack</Comment>
            
            <div className="stack-row">{techStack.map(stackName => <StackBox key={`${id}${stackName}`}>{stackName}</StackBox>)}</div>
            <Comment>See it in action</Comment>
            
            <div className="project-links">
                {siteLink && <a href={siteLink}>Visit the site <FiLink></FiLink></a>}
                {githubLink && <a href={githubLink}>See the code <AiFillGithub></AiFillGithub></a>}
                {!siteLink && !githubLink && <p>This project has no links</p>}
            </div>
        </div>
    )
}


export default Project
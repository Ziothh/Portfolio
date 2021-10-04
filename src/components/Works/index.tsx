import works from "../../data/myWorks"

import Section from "../Section"
import Comment from '../basic/Comment'
import StackBox from "./StackBox"

import { AiFillGithub } from "react-icons/ai"
import { FiLink } from "react-icons/fi"

import "./Works.scss"

const Works: React.FC = () => {
    return (
        <Section id="work">
            {works.map(({id, image, name, siteLink, githubLink, techStack}) => {
                return(<div className="work-container" key={`work#${id}`}>
                    <img src={image} alt={image} />
                    <Comment>Tech stack</Comment>
                    <div className="stack-row">{techStack.map(stackName => <StackBox key={`${id}${stackName}`}>{stackName}</StackBox>)}</div>
                    <Comment>See it in action</Comment>
                    <div className="project-links">
                        {siteLink && <a href={siteLink}>Visit the site <FiLink></FiLink></a>}
                        {githubLink && <a href={githubLink}>See the code <AiFillGithub></AiFillGithub></a>}
                        {!siteLink && !githubLink && <p>This project has no links</p>}
                    </div>
                </div>)
            })}
        </Section>
    )
}


export default Works
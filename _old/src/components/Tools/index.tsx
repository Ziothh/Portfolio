import "./Tools.scss"

import type { BackendTool, CodeLanguage, DataBaseVariant, FrontendTool, OtherTool, ProgramTool } from "../../data/technologies/types"

import Section from "../Section"
import TechnologyList from "./TechnologyList"
import Comment from '../basic/Comment'

const Tools: React.FC = () => {
    return (
        <Section id="tools">
            <Comment>Hier is een lijstje van mijn favoriete tools op dit moment</Comment>
            <div id="technologies">
                <TechnologyList
                    title="Frontend"
                    technologies={[
                        "ReactJS",
                        "SCSS",
                        "CSS",
                        "HTML",
                    ] as FrontendTool[]}
                />
                <TechnologyList
                    title="Backend"
                    technologies={[
                        "NodeJS",
                        "Express",
                        "mikro-orm",
                        "Python"
                    ] as (BackendTool | CodeLanguage | DataBaseVariant)[]}
                />
                <TechnologyList
                    title="Other"
                    technologies={[
                        "TypeScript",
                        "GraphQL",
                        "JavaScript",
                        "Figma"
                    ] as (OtherTool | CodeLanguage | ProgramTool)[]}
                />
            </div>
        </Section>
    )
}


export default Tools
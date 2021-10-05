import works from "../../data/myWorks"

import Section from "../Section"
import Project from "./Project"


import "./Works.scss"

const Works: React.FC = () => {
    return (
        <Section id="work">
            {works.map(data => <Project key={`work#${data.id}`} {...data}/>)}
        </Section>
    )
}


export default Works
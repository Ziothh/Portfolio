import type { TechStackItem } from "../../data/technologies/types"
import { STACK_URLs } from "../../data/technologies/urls"

interface Props {
    title: string,
    technologies: TechStackItem[]
}


const TechnologyList: React.FC<Props> = ({title, technologies}) => {
    return <div className="technologyList">
            <p className="technologyList-title">{title}</p>
            {technologies.map(t => <a key={`${t}`} className="technologyList-item" href={STACK_URLs[t]}>{t}</a>)}
        </div>
    
}


export default TechnologyList
import type { TechStackItem } from "../../data/technologies/types";
import { STACK_URLs } from "../../data/technologies/urls";
import "./StackBox.scss"

interface Props {
    children: TechStackItem
}


const StackBox: React.FC<Props> = ({children}) => {
    return (
        <a href={STACK_URLs[children as TechStackItem]} className="StackBox">
            {children}
        </a>
    )
}


export default StackBox
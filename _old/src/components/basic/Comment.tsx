import "./Comment.scss"

interface Props {
    children: string
}


const Comment: React.FC<Props> = ({children}) => {
    return (
        <p className="comment">
            {`// ${children}`}
        </p>
    )
}


export default Comment
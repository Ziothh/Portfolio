interface Props {
    name: string
    description: string
    className: string
}


const OnHoverOverlay: React.FC<Props> = ({description, name, className}) => {
    return (
        <div className={`project-overlay ${className}`}>
            <h1 className="project-name">{name}</h1>
            <p className="project-description">{description}</p>
        </div>
    )
}


export default OnHoverOverlay
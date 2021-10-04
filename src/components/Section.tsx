import "./Section.scss"

interface Props {
    id: string
}


const Section: React.FC<Props> = ({id, children}) => {
    return (
        <section id={id} className="section">
            <h1>{`<section id="${id}">`}</h1>
            <div className="section-container">
                {children}
            </div>
            <h1>{"</section>"}</h1>
        </section>
    )
}


export default Section
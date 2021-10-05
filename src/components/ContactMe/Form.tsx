const Form: React.FC = () => {
    return (
        <form id="contactme-form">
            <input type="text" placeholder="Naam" />
            <input type="email" placeholder="E-mail"/>
            <textarea placeholder="Bericht" />
            <button type="submit">Verzenden</button>
        </form>
    )
}

export default Form
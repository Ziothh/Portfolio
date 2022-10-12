import "./ContactMe.scss"

import Section from "../Section"
import Form from "./Form"
import Socials from "./Socials"
import Header from "./Header"

const ContactMe: React.FC = () => {
    return (
        <Section id="contact">
            <div className="socials-text">
                <Header/>
                <Socials/>
            </div>
            <Form/>
        </Section>
    )
}


export default ContactMe
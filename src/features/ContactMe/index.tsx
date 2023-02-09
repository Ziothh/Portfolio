import Form from "./Form"
import Socials from "./Socials"
import Header from "./Header"

import "./ContactMe.scss"

const ContactMe: React.FC = () => {
    return (
        <>
            <div className="">
                <Header/>
                <Socials/>
            </div>
            <Form/>
        </>
    )
}


export default ContactMe
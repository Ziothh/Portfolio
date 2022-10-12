import { useState } from "react"
import me from "../../data/me"
import Comment from "../basic/Comment"

const Header = () => {
    const [phoneHover, setPhoneHover] = useState(false)
    const copyPhoneToClipboard = () => {navigator.clipboard.writeText(me.phone); alert("Copied to clipboard")} //Todo: make this better

    return (
        <header>
            <h1>Neem contact op 📡</h1>

            <h2>Stuur me een <span 
                onClick={() => {
                    const firstInput = document.getElementById("contactme-form")!.childNodes[0] as HTMLInputElement
                    firstInput.focus()
                }} 
                className="email-cta"
            >e-mail 📧</span></h2>

            <h2>of geef mij een <span 
                title="Copy to cliboard" 
                onClick={copyPhoneToClipboard} 
                className="phone-cta" 
                onMouseEnter={() => setPhoneHover(true)} 
                onMouseLeave={() => setPhoneHover(false)}
            >belletje 🤙</span></h2>

            <div className="phone-container">
                <span
                    title="Copy to cliboard"
                    onClick={copyPhoneToClipboard}
                    className={`phone ${phoneHover && "phone-hover"}`}
                >{me.phone}</span>
                <Comment>Copy me!</Comment>
            </div>
        </header>
    )
}


export default Header
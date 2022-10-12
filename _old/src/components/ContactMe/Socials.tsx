import Comment from "../basic/Comment"
import { ReactComponent as GithubIcon } from "../../icons/github.svg"
import { ReactComponent as LinkedInIcon} from "../../icons/linkedin.svg"

const Socials = () => {
    return (
        <div className="socials">
            <Comment>Mijn socials</Comment>
            <div className="socials-icons">
                <a className="round" href="https://github.com/Ziothh"><GithubIcon/></a>
                <a href="linkedin.com/in/louis-giët-87683021b"><LinkedInIcon/></a>
            </div>
        </div>
    )
}


export default Socials
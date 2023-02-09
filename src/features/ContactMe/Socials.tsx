import Comment from "../basic/Comment"
import { ReactComponent as GithubIcon } from "../../icons/github.svg"
import { ReactComponent as LinkedInIcon} from "../../icons/linkedin.svg"
import ME from "../../data/ME.constant"

const Socials = () => {
    return (
        <div className="socials">
            <Comment>Mijn socials</Comment>
            <div className="socials-icons">
                <a className="round" href={ME.github}>
                    <img src="/icons/github.svg" alt="Github icon" />
                    </a>
                <a href={ME.linkedIn}>
                    <img src="/icons/linkedin.svg" alt="LinkedIn icon" />
                </a>
            </div>
        </div>
    )
}


export default Socials
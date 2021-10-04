import "./navbar.scss"
import Logo from "./Logo"
import Navlinks from "./NavLinks"

const Navbar: React.FC = () => {
    return (
        <nav>
            <Logo/>
            <Navlinks/>
        </nav>
    )
}


export default Navbar
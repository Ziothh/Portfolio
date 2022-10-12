import NavLink from "./NavLink"

const Navlinks: React.FC = () => {
    return (
        <ul id="nav-links">
            <NavLink name=".work()" elementID="work"/>
            <NavLink name=".about()" elementID="about"/>
            <NavLink name=".tools()" elementID="tools"/>
            <NavLink name=".contact()" elementID="contact"/>
        </ul>
    )
}


export default Navlinks
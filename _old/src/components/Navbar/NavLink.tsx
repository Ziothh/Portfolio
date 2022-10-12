interface Props {
    name: string
    link?: string
    elementID?: string
}


const NavLink: React.FC<Props> = ({name, elementID, link}) => {
    return (
        <li className="nav-link">
           <a href={link ?? `#${elementID}`}>{name}</a> 
        </li>
    )
}


export default NavLink
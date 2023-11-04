import '../styles/components/header.css'
import { Outlet, Link } from "react-router-dom";
import { SolidLink, OutlineLink } from './Links';

const Header = () => {
    return (
        <header>
            <nav>
                <Link className="logo_link" to="/" >Swimhub</Link>
                <span>
                <SolidLink to="/signup">Create an account &#10140;</SolidLink>
                <OutlineLink to="/login">Log in</OutlineLink>
                </span>
            </nav>
            <Outlet />
        </header>
    )
}
export default Header
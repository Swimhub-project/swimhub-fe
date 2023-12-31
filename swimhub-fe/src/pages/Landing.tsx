import { Outlet} from "react-router-dom";
import Layout from "../components/Layout";
import logoLarge from '../assets/swimhubfull.webp'
import { SolidLink, OutlineLink, NakedLink } from "../components/Links";
import '../styles/landing.css'

// to-do: conditional redirect to home page if user is logged in
const Landing = () => {
    return (
        <Layout>
            <main className="landing-main">
                <img className="landing-logo" src={logoLarge} alt="swimhub logo" />
                    <div className="landing-content">
                        <span className="landing-links">
                            <SolidLink to="/signup" >Create an account &#10140;</SolidLink>
                            <OutlineLink to="/home" >Browse as a guest</OutlineLink>
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. 
                        </p>
                    </div>
                    <NakedLink to='/login'>Already have an account? Log in.</NakedLink>
            </main>
            <Outlet />
        </Layout>
    )
}
export default Landing
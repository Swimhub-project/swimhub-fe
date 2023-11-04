import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import logoLarge from '../assets/swimhubfull.webp'
import { SolidLink, OutlineLink } from "../components/Links";
import '../styles/landing.css'

const Landing = () => {
    return (
        <Layout>
            <main className="landing_main">
                <img className="landing_logo" src={logoLarge} alt="swimhub logo" />
                <span>
                    <SolidLink to="/signup" >Create an account &#10140;</SolidLink>
                    <OutlineLink to="/home" >Browse as a guest</OutlineLink>
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. 
                </p>
            </main>
            <Outlet />
        </Layout>
    )
}
export default Landing
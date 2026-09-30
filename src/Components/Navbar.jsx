import logo from '../assets/favicon.ico'
import PageLinks from './PageLinks.jsx'
import SocialLinks from './SocialLinks.jsx'
import { useState } from "react"
const Navbar = () => {
    const [isToggled,setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggled)
    }
    return (
    <nav className="navbar">
        <div className="container navbar-flex">
            <img src="../favicon.ico" alt="logo" className="logo"/>
{/* <!-- main menu --> */}
            <div className="main-menu">
                <PageLinks groupClass="main-menu-list" />
                <SocialLinks groupClass="nav-icons" listItemClass="nav-icon" />
                    {/* <!-- add social media links insude href --> */}
            </div>
{/* <!-- mobile menu --> */}
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">
                    <button onClick={handleToggle}>
                        <i className="fa-solid fa-bars"></i></button>
                    {/* <!-- TODO active --> */}
                    <div className={isToggled ? "mobile-menu-items active" : "mobile-menu-items"}>
                        <PageLinks groupClass="mobile-menu-list"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Navbar
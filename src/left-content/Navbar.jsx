
import { FaRegUserCircle, FaUserGraduate } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";
function Navbar() {
    const navbar = [
        <li className="active" key="home"><a href="#home"><FaRegUserCircle style={{ marginRight: "1rem" }} />Introduce </a></li>,
        <li key="about"><a href="#about"><FaPerson style={{ marginRight: "1rem", fontSize: "20px", marginLeft: "0.3em" }} /> About me</a></li>,
        <li key="services"><a href="#services"><FaUserGraduate style={{ marginRight: "1rem", marginLeft: "1em" }} /> Experience</a></li>,
        <li key="contact"><a href="#contact"><RiUserFollowLine style={{ marginRight: "1rem" }} />Follow me</a></li>,
    ];
    return (
        <ul className="nav-bar">
            {navbar}
        </ul>
    );
}

export default Navbar;
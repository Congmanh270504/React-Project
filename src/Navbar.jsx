
import { CiSearch } from "react-icons/ci";
function Navbar() {
    const navbar = [
        <li key="search"><div className="search"> <input placeholder="What u wont?"></input> <CiSearch style={{ fontSize: '20px' }} /></div></li>,
        <li key="home"><a href="#home">Home</a></li>,
        <li key="about"><a href="#about">About</a></li>,
        <li key="services"><a href="#services">Services</a></li>,
        <li key="contact"><a href="#contact">Contact</a></li>
    ];
    return (
        <ul className="nav-bar">
            {navbar}
        </ul>
    );
}
export default Navbar;
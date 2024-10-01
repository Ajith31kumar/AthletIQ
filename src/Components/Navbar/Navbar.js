import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation(); // Hook to access the current route location

    const navCLinkcked = (id) => () => {
        setActiveItem(activeItem === id ? null : id); // Toggle active state
    };

    const handleCLinkckOutside = (event) => {
        const navbar = document.getElementById("navbar");
        if (navbar && !navbar.contains(event.target)) {
            setActiveItem(null); // Close subitems if cLinkcked outside
        }
    };

    useEffect(() => {
        // Add event Linkstener to handle cLinkcks outside the navbar
        document.addEventListener("mousedown", handleCLinkckOutside);

        // Cleanup the event Linkstener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleCLinkckOutside);
        };
    }, []);

    useEffect(() => {
        // Close subitems when the route changes (navigates to a new page)
        setActiveItem(null);
    }, [location]);


    return (
        <div id="navbar">
            <div className="imageContainer">
                <Link to="/"><img src="/Images/logo.jpg" alt="Athletiq" /></Link>
            </div>
            <ul className="navLinks">
                <Link to="/about" onClick={navCLinkcked("about")}>ABOUT</Link>
                <Link to="/team" onClick={navCLinkcked("team")}>TEAM</Link>
                <li onClick={navCLinkcked("offerings")}>OFFERINGS</li>
                {activeItem === "offerings" && (

                <div className="dropdown">
                    <ul>
                        <li className="title">PRODUCTS</li>
                        <li><Link to="products/football">EYERIS FOOTBALL</Link></li>
                        <li><Link to="products/cricket">EYERIS CRICKET</Link></li>
                        <li><Link to="products/vision-football">EYEQ ATHLETIC VISION PRO FOOTBALL</Link></li>
                        <li><Link to="products/vision-cricket">EYEQ ATHLETIC VISION PRO CRICKET</Link></li>
                    </ul>
                    <ul>
                        <li className="title">SERVICES</li>
                        <li><Link to="services/eyeris">EYERIS</Link></li>
                    </ul>
                </div>
                )}
                <Link to="/testimonials" onClick={navCLinkcked("testimonials")}>TESTIMONIALS</Link>
                <Link to="/about" onClick={navCLinkcked("contact")}>CONTACT</Link>
            </ul>
        </div>
    );
}

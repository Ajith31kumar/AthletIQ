import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation(); // Hook to access the current route location

    const navClicked = (id) => () => {
        setActiveItem(activeItem === id ? null : id); // Toggle active state
    };

    const handleClickOutside = (event) => {
        const navbar = document.getElementById("navbar");
        if (navbar && !navbar.contains(event.target)) {
            setActiveItem(null); // Close subitems if clicked outside
        }
    };

    useEffect(() => {
        // Add event listener to handle clicks outside the navbar
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Close subitems when the route changes (navigates to a new page)
        setActiveItem(null);
    }, [location]);

    const products = [
        {
            id: "mindscape",
            name: "MINDSCAPE (ASSESSMENT TOOL)",
            subProducts: [
                {
                    id: "arjuna",
                    name: "Arjuna's Eye",
                    description: "Arjuna's Eye is designed to test and enhance visual skills, focus, and precision. This product leverages advanced technology to assess and improve your ability to different visual stimuli, benchmarking your numbers with similar group. The product also focuses optionally on helping you sharpen your sight and achieve greater accuracy in fast-paced environments.",
                    image: "/images/Arjuna.png"
                },
                {
                    id: "bheema",
                    name: "Bheema's Strength",
                    description: "Bheema's Strength focuses on measuring strength, stamina and endurance. This product provides detailed insights into your physical capacity, helping you track your progress and build greater strength across all age groups.",
                    image: "/images/bheema.png"
                },
                {
                    id: "chanakya",
                    name: "Chanakya's Wisdom",
                    description: "Chanakya's Wisdom is crafted to assess cognitive abilities, including memory, pattern recognition, and strategic thinking. This product helps individuals unlock their mental potential, enhancing decision-making skills and boosting overall cognitive performance.",
                    image: "/images/C.png"
                },
                {
                    id: "karna",
                    name: "Karna's Aim",
                    description: "Karna's Aim is built to refine hand-eye coordination and precision. With this product, you can train and measure your ability to finese, improving your reaction time and coordination skills for better performance in any activity requiring focus and accuracy.",
                    image: "/images/karnan.png"
                }
            ]
        }
    ];

    const services = [
        {
            id: "mindboost",
            name: "MINDBOOST (TRAINING PROGRAM)",
            subServices: [
                {
                    id: "mindboost-pro",
                    name: "MINDBOOST PRO (TRAINING PROGRAM)",
                    description: "MINDBOOST PRO helps enhance mental clarity and cognitive performance.",
                    image: "/images/eye12.png"
                },
                {
                    id: "eyeq-vision-freedom",
                    name: "EYEQ VISION FREEDOM (TRAINING PROGRAM)",
                    description: "EYEQ VISION FREEDOM is designed to improve vision and eliminate corrective lenses.",
                    image: "/images/eye34.png"
                }
            ]
        }
    ];

    const openNewTabWithContent = (item) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <html>
                <head>
                    <title>${item.name}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 50px;
                            display: flex;
                            justify-content: space-around;
                            align-items: flex-start;
                            background-color: #060153;
                            height: 100vh;
                            box-sizing: border-box;
                            color: white;
                        }
                        .image-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 20%;
                            text-align: center;
                        }
                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }
                        h1 {
                            font-size: 36px;
                            color: white;
                            margin-bottom: 20px;
                            text-align: center;
                        }
                        p {
                            font-size: 16px;
                            margin-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <h1>${item.name}</h1>
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.name}">
                        <p>${item.description}</p>
                    </div>
                </body>
            </html>
        `);
        newWindow.document.close();
    };

    return (
        <div id="navbar">
            <div className="imageContainer">
                <Link to="/"><img src="/Images/logo.jpg" alt="Athletiq" /></Link>
            </div>
            <ul className="navLinks">
                <Link to="/about" onClick={navClicked("about")}>ABOUT</Link>
                <Link to="/team" onClick={navClicked("team")}>TEAM</Link>
                <li onClick={navClicked("offerings")}>OFFERINGS</li>

                {activeItem === "offerings" && (
                    <div className="dropdown">
                        <ul>
                            <li className="title">PRODUCTS</li>
                            {products.map(product => (
                                <li key={product.id}>
                                    <span>{product.name}</span>
                                    <ul className="sub-products">
                                        {product.subProducts.map(subProduct => (
                                            <li key={subProduct.id}
                                                onClick={() => openNewTabWithContent(subProduct)} // Open new tab with product details
                                            >
                                                <span>{subProduct.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            <li className="title">SERVICES</li>
                            {services.map(service => (
                                <li key={service.id}>
                                    <span>{service.name}</span>
                                    <ul className="sub-services">
                                        {service.subServices.map(subService => (
                                            <li key={subService.id}
                                                onClick={() => openNewTabWithContent(subService)} // Open new tab with service details
                                            >
                                                <span>{subService.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <Link to="/testimonials" onClick={navClicked("testimonials")}>TESTIMONIALS</Link>
                <Link to="/contact" onClick={navClicked("contact")}>CONTACT</Link>
            </ul>
        </div>
    );
}

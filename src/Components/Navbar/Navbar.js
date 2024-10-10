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
            id: "arjuna",
            name: "MINDSCAPE (ASSESSMENT TOOL)",
            images: [
                { src: "/images/Arjuna.png", name: "Arjuna", description: "Arjuna's Eye is designed to test and enhance visual skills, focus, and precision. This product leverages advanced technology to assess and improve your ability to respond to different visual stimuli, benchmarking your numbers with a similar group." },
                { src: "/images/karnan.png", name: "Karna", description: "Karna's Aim is built to refine hand-eye coordination and precision. With this product, you can train and measure your ability to refine focus, improving your reaction time and coordination." },
                { src: "/images/C.png", name: "Chanakya", description: "Chanakya's Wisdom is crafted to assess cognitive abilities, including memory, pattern recognition, and strategic thinking. This product helps individuals unlock their mental potential, enhancing decision-making skills and boosting overall cognitive performance." },
                { src: "/images/bheema.png", name: "Bheema", description: "Bheema's Strength focuses on measuring strength, stamina and endurance. This product provides detailed insights into your physical capacity, helping you track your progress and build greater strength across all age groups." }
            ]
        }
    ];

    const services = [
        {
            id: "mindboost-pro",
            name: "MINDBOOST PRO (TRAINING PROGRAM)",
            description: "MINDBOOST PRO helps enhance mental clarity and cognitive performance.",
            images: [
                { src: "/images/eye12.png", name: "Mindboost Pro", description: "MINDBOOST PRO focuses on mental clarity and cognitive performance." },
                { src: "/images/eye34.png", name: "EYEQ Vision Freedom", description: "EYEQ Vision Freedom helps improve vision and eliminate corrective lenses." }
            ]
        }
    ];
    const openNewTabWithContent = (item) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${item.name}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            background-color: #060153;
                            height: 100vh;
                            margin: 0;
                            padding: 0;
                            color: white;
                        }
    
                        .carousel-container {
                            position: relative;
                            width: 900px;
                            height: 600px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            perspective: 1000px;
                        }
    
                        .carousel-slide {
                            position: absolute;
                            width: 250px;
                            height: 400px;
                            opacity: 0.5;
                            transition: transform 1s ease, opacity 1s ease;
                            transform: scale(0.8);
                        }
    
                        .carousel-slide img {
                            width: 100%;
                            height: 300px;
                            border-radius: 15px;
                            object-fit: cover;
                        }
    
                        .carousel-slide.active {
                            transform: scale(1.2);
                            opacity: 1;
                            z-index: 10;
                        }
    
                        .carousel-slide.left {
                            transform: translateX(-300px) scale(0.8);
                        }
    
                        .carousel-slide.right {
                            transform: translateX(300px) scale(0.8);
                        }
    
                        .image-name {
                            margin-bottom: 10px;
                            font-size: 24px;
                            text-align: center;
                            color: white;
                        }
    
                      .description {
                            margin-top: 20px;
                            font-size: 20px;
                            text-align: center;
                            line-height: 1.4;
                            max-width: 600px;
                            color: #ddd;
                            font-weight: bold; /* This makes the text bold */
                        }

                    </style>
                </head>
                <body>
                    <div class="carousel-container" id="carousel">
                        ${item.images.map((image, index) => `
                            <div class="carousel-slide ${index === 0 ? 'active' : index === 1 ? 'left' : 'right'}">
                                <p class="image-name">${image.name}</p> <!-- Name above the image -->
                                <img src="${image.src}" alt="${image.name}">
                            </div>
                        `).join('')}
                    </div>
    
                    <p class="description">${item.images[0].description}</p>
    
                    <script>
                        let slideIndex = 0;
                        const slides = document.querySelectorAll('.carousel-slide');
                        const totalSlides = slides.length;
                        const descriptions = ${JSON.stringify(item.images.map(image => image.description))};
                        const descriptionElement = document.querySelector('.description');
    
                        function showNextSlide() {
                            slides.forEach(slide => slide.classList.remove('active', 'left', 'right'));
    
                            // Update the slide index
                            slideIndex = (slideIndex + 1) % totalSlides;
    
                            // Update the classes for active, left, and right slides
                            slides[slideIndex].classList.add('active');
                            slides[(slideIndex - 1 + totalSlides) % totalSlides].classList.add('left');
                            slides[(slideIndex + 1) % totalSlides].classList.add('right');
    
                            // Update the description for the active image
                            descriptionElement.textContent = descriptions[slideIndex];
                        }
    
                        // Auto-slide every 3 seconds
                        setInterval(showNextSlide, 3000);
                    </script>
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
                        {/* MINDSCAPE Section */}
                        <ul>
                            <li className="title">products</li>
                            {products.map(product => (
                                <li key={product.id}>
                                    <span onClick={() => openNewTabWithContent(product)}>
                                        {product.name}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* MINDBOOST Section */}
                        <ul>
                            <li className="title">SERVICE</li>
                            {services.map(service => (
                                <li key={service.id}>
                                    <span onClick={() => openNewTabWithContent(service)}>
                                        {service.name}
                                    </span>
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

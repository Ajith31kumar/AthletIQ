import Carousel from "../../Components/Carousel/Carousel";
import "./TestimonialPage.css";
import Data from "../../Data/TestimonialData.json";
import { useState } from "react";

export default function TestimonialPage() {
    const [currentCarousel, setcurrentCarousel] = useState(0);



    return(
        <section id="testimonial">
            {Data.testimonails.map((testimony, index) => <Carousel 
                name = {testimony.name} 
                src = {testimony.src} 
                alt = {testimony.alt} 
                testimonail = {testimony.testimonail}
                desc = {testimony.desc}
                key = {index}
                currentCarousel = {currentCarousel}
                setcurrentCarousel = {setcurrentCarousel}
                length = {Data.testimonails.length}
            />)}
            
        </section>
    )
}
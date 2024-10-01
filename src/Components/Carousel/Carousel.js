import "./Carousel.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";

export default function Carousel(props) {
    const next = () => {
        props.setcurrentCarousel(prev => {
            if (prev !== props.length - 1) {
                return prev + 1;  // Return the updated value
            }
            return prev;  // Return the previous value if no change
        });
        console.log(props.currentCarousel);
    }

    const last = () => {
        props.setcurrentCarousel(prev => {
            if (prev > 0) {
                return prev - 1;  // Return the updated value
            }
            return prev;  // Return the previous value if no change
        });
        console.log(props.currentCarousel);
    }

    return (
        <div className={`carousel ${props.currentCarousel === props.key && "show"}`}>
            <IoIosArrowDropleftCircle onClick={last} />
            <img src={props.src} alt={props.alt} />
            <div>
                <p>{props.testimonial}</p>
                <h1>{`-${props.name}`}</h1>
                <h5>{props.desc}</h5>
            </div>
            <IoIosArrowDroprightCircle onClick={next} />
        </div>
    );
}


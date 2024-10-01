import "./TeamCard.css";

export default function TeamCard(props) {

    return(
        <div className="teamCard">
            <img src= {props.src} alt={props.alt} />
            <div>
                <h1>{props.name}</h1>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};
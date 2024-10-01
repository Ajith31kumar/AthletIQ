import Flowchart from "../../Components/Flowchart/Flowchart"
import Form from "../../Components/Form/Form"
import "./HomePage.css"

export default function HomePage() {
    return (
        <section id="homePage">
            <div className="homeTitle">
            {/* test train improve */}
            {/* assess Condition Enhance*/}
                
                <h1>AthletIQ </h1>
                <h2>Pushing The Boundaries of Human Potential</h2>
                <div className="flowchartContainer">
                    <Flowchart />
                </div>
                <div className="fact">
                <h2>Unleash your potential, raise the bar – for athletes and teams striving for excellence</h2>
                    <p>With advanced training methods, reflexes can be enhanced to an impressive 200 milliseconds. At Athletiq, we’re dedicated to advancing performance development, providing customized solutions that drive excellence for individuals, teams, schools, clubs, colleges, and academies.</p>    
                </div>
            </div>
            <Form />
        </section>
    )
}
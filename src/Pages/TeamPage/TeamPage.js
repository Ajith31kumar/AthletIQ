import "./TeamPage.css";
import teamData from "../../Data/TeamData.json";
import TeamCard from "../../Components/TeamCard/TeamCard";

export default function TeamPage() {

    return(
        <section id="teamPage">
            <div>
                {teamData.team.map(member => <TeamCard src={member.src} alt={member.alt} name={member.Name} title={member.Title} desc={member.desc}/> )}
            </div>
        </section>
    );
};
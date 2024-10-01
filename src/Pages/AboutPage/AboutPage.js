import React from 'react';
import './AboutPage.css';
import data from "../../Data/AboutData.json"
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiTarget } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutPage() {
    const iconMapping = {
        FaMagnifyingGlassChart: FaMagnifyingGlassChart, 
        GiWeightLiftingUp: GiWeightLiftingUp,
        PiTarget: PiTarget
    }

    return (
        <section id="aboutPage">
            <h1>How It Works</h1>
            <div className='numbers'>
                <div className='round1'>
                    <h1>1</h1>
                </div>
                <div className='round2'>
                    <h1>2</h1>
                </div>
                <div className='round3'>
                    <h1>3</h1>
                </div>
                
            <FaArrowRightLong className='arrow1'/>
            <FaArrowRightLong className='arrow2'/>
            </div>
            
            <div className='about'>
                {data.about.map((item, index) => {
                    const IconComponent = iconMapping[item.icon];
                    return (
                        <div key={index} style={{ color: item.color }}  className='process-box'>
                            
                        <IconComponent className="icon"/>
                            <div className='textContainer'>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.description.map(bullets => <li>{bullets}</li>)}
                                </ul>
                            </div>

                            <div class="overlay"></div>
                            <video width="320" height="240" autoPlay loop muted className='bgVideo'>
                                <source src= {item.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


import React from 'react';
import './Flowchart.css'; // Assuming you save the CSS in a file named Flowchart.css

export default function Flowchart(){
  return (
    <div className="flowchart">
    
    {/* Measure train improve */}
      <img src='Images/3.png' alt='flowchart' className='flowchart'/>
      <div>
        <video className='video' autoPlay loop muted>
          <source src="/Video/sportsStars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};


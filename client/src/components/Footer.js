import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
return (
<div className='footer'>
<img src="images/top_wave.png" alt="wave"/>

<div className='share'>
<Link to="https://www.facebook.com/">< button className="btn" >facebook</button></Link>
<Link to="https://twitter.com/" >< button className="btn">twitter</button></Link>
<Link to="https://www.instagram.com/">< button className="btn">instagram</button></Link> 
  
</div>
<div className='credit'> owned by <span> VAB Cosmetics </span> | all rights reserved </div>
<img src="images/bottom_wave.png" alt="wave"/>
      
</div>
)
}

export default Footer

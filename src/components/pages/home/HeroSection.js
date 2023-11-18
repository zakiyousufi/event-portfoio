import React from "react";

const HeroSection = () => {
  return (
    <div className="home-header"> 
      <h1 className="welcome">Welcome to YouthIGFA!</h1>
      <span className="caption">Empowering Afghan Youth in Internet Governance</span>
      <h3 className="cover">Join us in shaping Afghanistan's digital future.</h3>
      <div className="home-btn">
        <a href="#about" className="btn-main">Learn More</a>
        <a href="#events" className="btn-main">Get Involved</a>
      </div>
    </div>
  )
}

export default HeroSection;

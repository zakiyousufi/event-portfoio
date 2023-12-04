import React from "react";
import "../../style/style.css";
import Objectives2023 from "./Objectives23";
import Objectives2024 from "./Objectives24";
import History from "./History";
import Team from "./Team";
import AboutSlider from "./AboutSlider";
import Objective from "../../../assets/objective.jpg";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column home pt-5">
      <h2 className="title mt-2">ABOUT US</h2>
      <div className="d-flex justify-content-start flex-column w-100 pl-4 pr-4">
        <p>
            In today's ever-growing digital age, the role of young people is undeniable, particularly in
            countries like Afghanistan where the youth population accounts for over 70%. While
            Afghanistan's digital transformation journey began decades ago, the country initiated its
            National IGF in 2017. It was during this inaugural event that Youth Internet Governance
            Forum Afghanistan (YouthIGFA) took its first steps, initiating this transformative journey.
            Created from a clear need to champion the youth, who form the majority of Afghanistan's
            internet users, YouthIGFA quickly became a guiding light for empowerment, voice, and
            leadership.
            {' '}
            <a href="#" className="link">Learn More</a>
          </p>
          <AboutSlider />
          <div className="about-snippet d-flex justify-content-between mt-5">
            <div className="divider d-flex flex-column justify-content-center">
              <h4>Objectives:</h4>
              <p>
                Our objectives are the driving force propelling us toward the realization of our mission and
                goals. Set on an annual basis, these objectives play a crucial role in amplifying youth
                participation, recognition, leadership, and collaboration. They serve as the guiding lights,
                setting precise benchmarks for YouthIGFA to pursue, producing tangible and measurable
                outcomes that ultimately shape a digital future in Afghanistan, with youth at the forefront
              </p>
            </div>
            <img className="w-50 ml-2 side-image"
              src={Objective} alt="YouthIGFA" />
          </div>
          <Objectives2023 />
          <Objectives2024 />
          <History /> 
          <Team />
        </div>
    </div>
  );
}

export default About;

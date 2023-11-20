import React from "react";
import "../style/style.css";
import Objectives2023 from "./Objectives23";
import Objectives2024 from "./Objectives24";
import History from "./History";
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
          <h4>Mission:</h4>
          <p>
            The mission of YouthIGFA is “to empower Afghan youth in shaping the future of the Internet
            through meaningful participation and inclusion in governance decisions.”
          </p>
          <h4>Vision:</h4>
          <p>
            YouthIGFA envisions “a youth-powered digital transformation for Afghanistan.”
          </p>
          <h4>Goals:</h4>
          <p>
            YouthIGFA ensures this through working towards realization the following goals:
            <ol>
              <li className="mt-4">
                <strong>Youth Participation:</strong> Ensure that Afghan youth voices resonate in all significant
                Internet-related decision-making spaces within Afghanistan and in the region.
                Empower them not just to participate but to actively influence discussions and
                outcomes.
              </li>
              <li className="mt-4">
                <strong>Youth Recognition:</strong> Highlight and celebrate young achievers who have made
                significant contributions to Afghanistan's digital landscape through various YouthIGFA
                recognition mechanisms, e.g. an annual award program.
              </li>
              <li className="mt-4">
                <strong>Youth Leadership:</strong> Cultivate a new generation of youth leaders who will champion
                Internet-related issues within the country and represent Afghan youth on global
                platforms. These leaders will also mentor and guide future YouthIGFA participants.
              </li>
              <li className="mt-4">
                <strong>Partnership for Youth Empowerment:</strong> : Establish collaborations with international
                organizations, governmental bodies, NGOs, and private sector entities to create
                diverse opportunities for Afghan youth. These opportunities should include
                internships, mentorship programs, and job placements within the digital sector.
              </li>
            </ol>
          </p>
          <h4>Values:</h4>
          <p>
            The core values underpin our approach to the YouthIGFA’s mission and goals, emphasizing
            the importance of inclusivity, empowerment, collaboration, and youth-centricity in its work.
            <ol>
              <li className="mt-4">
                Inclusivity: Ensuring the participation and representation of all Afghan youth,
                especially those often marginalized.
              </li>
              <li className="mt-4">
                Empowerment: Equipping Afghan youth with the knowledge and skills necessary to
                navigate the digital realm and make informed decisions.
              </li>
              <li className="mt-4">
                Collaboration: Building strong partnerships and alliances across sectors to amplify
                youth voices in Internet governance.
              </li>
              <li className="mt-4">
                Youth-Centrism: Prioritizing the unique needs, perspectives, and opportunities of
                young Afghans in the digital domain.
              </li>
            </ol>
          </p>
          <h4>Objectives:</h4>
          <p>
            Our objectives are the driving force propelling us toward the realization of our mission and
            goals. Set on an annual basis, these objectives play a crucial role in amplifying youth
            participation, recognition, leadership, and collaboration. They serve as the guiding lights,
            setting precise benchmarks for YouthIGFA to pursue, producing tangible and measurable
            outcomes that ultimately shape a digital future in Afghanistan, with youth at the forefront
          </p>
          <Objectives2023 />
          <Objectives2024 />
          <History />
          
        </div>
    </div>
  );
}

export default About;

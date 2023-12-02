import React, { useState } from "react";
import team from "./teamData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [containerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!containerVisible);
  };

  const openMemberPopup = (member) => {
    setSelectedMember(member);
  };

  const closeMemberPopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="p-3 mt-4">
      <h4>Meet the Team: The Pulse Behind the Movement</h4>
      <p>
        Meet the dedicated individuals who drive YouthIGFA's mission and initiatives. Our team
        consists of passionate professionals, youth leaders, and experts in the fields of internet
        governance, youth empowerment, and digital technology.
      </p>
      <div className="pl-4 mt-5">
        <h5 className="title">Organizing Committee</h5>
        <p>
          Our Organizing Committee plays a crucial role in planning and executing our annual events
          and programs. Composed of individuals committed to youth empowerment and digital
          transformation, they ensure the success of our initiatives.
        </p>
        <p>
          {containerVisible ? "Hide members" : "Show members"}
          <button className="arrow" onClick={toggleContainer}>
            {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </p>
        {containerVisible && (
          <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
            {team[0].organizingCommittee.map((member) => (
              <div
                className="card w-25 h-50 m-2"
                key={member.name}
                onClick={() => openMemberPopup(member)}
              >
                <img className="user" src={member.image} alt={member.name} />
                <div className="member-details">
                  <h6>{member.name}</h6>
                  <p className="small-text text-center">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <h5 className="title">Secretariat</h5>
        <p>
          Our Secretariat is responsible for the day-to-day operations of YouthIGFA. They handle
          administrative tasks, manage communication, and ensure the smooth flow of information
          among stakeholders.
        </p>
        <p>{containerVisible ? 'Hide members' : 'Show members' }
          <button className="arrow" onClick={toggleContainer}>
            {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </p>
        {containerVisible && (
        <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
          {team[0].secretariat.map((member) => (
            <div className="card w-25 h-50 m-2" key={member.name} onClick={() => openMemberPopup(member)}>
              <img className="user" src={member.image} alt={member.name} />
              <div className="member-details">
                <h6>{member.name}</h6>
                <p className="small-text text-center">{member.position}
                  <br />
                  <button type="button" className="link no-bg">Read More</button>
                </p>
              </div>
            </div>
          ))}
        </div>
        )}

        <h5 className="title">Advisory Committee</h5>
        <p>
          Our Advisory Committee consists of experts, mentors, and leaders in internet governance,
          youth empowerment, and digital technology. They provide valuable guidance and insights to
          help shape the direction of YouthIGFA.
        </p>
        <p>{containerVisible ? 'Hide members' : 'Show members' }
          <button className="arrow" onClick={toggleContainer}>
            {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </p>
        {containerVisible && (
        <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
          {team[0].advisoryCommittee.map((member) => (
            <div className="card w-25 h-50 m-2" key={member.name} onClick={() => openMemberPopup(member)}>
              <img className="user" src={member.image} alt={member.name} />
              <div className="member-details">
                <h6>{member.name}</h6>
                  <button type="button" className="link no-bg">Read More</button>
                  <br />
              </div>
            </div>
          ))}
        </div>
        )}

        <h5 className="title">Speakers and Trainers</h5>
        <p>
          Our Speakers and Trainers are industry experts and thought leaders who contribute
          significantly to our events and programs. They bring their knowledge and experience to
          guide and inspire our participants.
        </p>
        <p>{containerVisible ? 'Hide members' : 'Show members' }
          <button className="arrow" onClick={toggleContainer}>
            {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </p>
        {containerVisible && (
        <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
          {team[0].speakersAndTrainers.map((member) => (
            <div className="card w-25 h-50 m-2" key={member.name} onClick={() => openMemberPopup(member)}>
              <img className="user" src={member.image} alt={member.name} />
              <div className="member-details">
                <h6>{member.name}</h6>
                  <button type="button" className="link no-bg">Read More</button>
                  <br />
              </div>
            </div>
          ))}
        </div>
        )}

        <p>
          <br />
          Join us in shaping the digital future of Afghanistan. Get to know our team, and discover the
          passionate individuals behind YouthIGFA's initiatives.
          <br />
          <br />
          We, at YouthIGFA, are more than just a forum. We are a movement, a promise, and a dream
          woven with threads of passion, commitment,and dedication. Together, we can create a brighter future for the youth of Afghanistan and beyond.
        </p>
      </div>
      {selectedMember && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closeMemberPopup}>
              &times;
            </button>
            <div className="">
              <img className="" src={selectedMember.image} alt={selectedMember.name} />
              <h6>{selectedMember.name}</h6>
              <p>{selectedMember.position}</p>
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;

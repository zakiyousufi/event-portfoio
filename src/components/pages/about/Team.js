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
    <div className="pl-5">
      <div className="pl-4 mt-5">
        <h5 className="title">Organizing Committee
        <button className="btn-main" onClick={toggleContainer}>
            {containerVisible ? "Hide members" : "Show members"} 
            {' '}
            {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </h5>
        <p>
          Our Organizing Committee plays a crucial role in planning and executing our annual events
          and programs. Composed of individuals committed to youth empowerment and digital
          transformation, they ensure the success of our initiatives.
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
          among stakehol
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
          help shape the direction of Youth
        </p>
        {containerVisible && (
        <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
          {team[0].advisoryCommittee.map((member) => (
            <div className="card w-25 h-50 m-2" key={member.name} onClick={() => openMemberPopup(member)}>
              <img className="user" src={member.image} alt={member.name} />
              <div className="member-details">
                <h6>{member.name}</h6>
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
          guide and inspire our particip
        </p>
        {containerVisible && (
        <div className="team-members justify-content-center d-flex flex-wrap align-items-center">
          {team[0].speakersAndTrainers.map((member) => (
            <div className="card w-25 h-50 m-2" key={member.name} onClick={() => openMemberPopup(member)}>
              <img className="user" src={member.image} alt={member.name} />
              <div className="member-details">
                <h6>{member.name}</h6>
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

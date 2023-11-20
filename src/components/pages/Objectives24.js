import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Objectives2024 = () => {
  const [containerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!containerVisible);
  };

  return (
    <div>
      <div className="d-flex p-2">
        <h5>Objectives 2024</h5>
        {' '}
        <button className="arrow" onClick={toggleContainer}>
          {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      {containerVisible && (
        <div>
         <p>

            <strong>Youth Participation:</strong>
            <br />
            1. Maintain and expand youth participation,
            ensuring Afghan youth continue to actively
            engage in Internet-related decision spaces,
            with a target of 30% increase in
            participation by the end of 2024.
            <br />
            <br />
            <strong>Youth Recognition:</strong>
            <br />
            2. Launch the first annual YouthIGFA award
            program by end-2024, recognizing and
            celebrating 5 young individuals who have
            made outstanding contributions to
            Afghanistan's Internet landscape.
            <br />
            <br />
            <strong>Youth Leadership:</strong>
            <br />
            3. Launch the youth leadership
            development program, aiming to mold an
            additional 5 youth leaders who can take on
            influential roles within the Internet
            governance sphere by the close of 2024.
            <br />
            <br />
            <strong>Partnerships for Youth Empowerment:</strong>
            <br />
            4. Strengthen existing partnerships and
            establish connections with five more
            international organizations and three
            additional private sector companies,
            ensuring a wider array of opportunities for
            Afghan youth, including mentorship
            programs, scholarships, and job
            placements in the digital sector.
         </p>
        </div>
      )}
    </div>
  );
};

export default Objectives2024;

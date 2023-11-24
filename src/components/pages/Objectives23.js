import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Objectives2023 = () => {
  const [containerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!containerVisible);
  };

  return (
    <div>
      <div className="d-flex p-2">
        <h5>Objectives 2023</h5>
        {' '}
        <button className="arrow" onClick={toggleContainer}>
          {containerVisible ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      {containerVisible && (
        <div>
          <p className="pl-5">
            <strong>Youth Participation:</strong>
            <br />
            1. By the end of 2023, relaunch YouthIGFA
            after 3 years of break. Facilitate youth
            participation and dialogue by holding at
            least two workshops on Internet topics
            within Afghanistan.
            <br />
            <br />
            <strong>Youth Recognition:</strong>
            <br />
            2. By end-2023, draft concept for an annual
            YouthIGFA award program to recognize and
            celebrate young individuals who have made
            outstanding contributions to Afghanistan's
            digital landscape.
            <br />
            <br />
            <strong>Youth Leadership:</strong>
            <br />
            3. By the close of 2023, a draft concept to
            identify and train emerging youth leaders in
            Internet governance. This shall be done
            through the YouthIGFA and partner
            activities, equipping them with the
            necessary skills and knowledge to
            represent Afghan youth on both national
            and international stages.
            <br />
            <br />
            <strong>Partnerships for Youth Empowerment:</strong>
            <br />
            4. Establish partnerships with at least three
            international organizations and two private
            sector companies before the YouthIGFA
            2023 supporting its organization.
            </p>
        </div>
      )}
    </div>
  );
};

export default Objectives2023;

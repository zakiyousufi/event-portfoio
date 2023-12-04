import React from "react";
import SideImage from "../../../assets/get-invovlved.jpg";

const GetInvolved = () => {
  return (
    <div className="pl-5 pr-5">
    <div className=" about-snippet d-flex justify-content-between">
    <div className="">
    <h4 className="title">GET INVOLVED</h4>
    <p className="mb-5">
      Youth participation lies at the core of YouthIGFA’s principles. We encourage both young
      people as well as established professionals to join us in ensuring an improved YouthIGFA
      each time. In addition to our annual YouthIGFA event, which offers a platform for active
      participation, we may offer periodic information sessions throughout the year. These
      opportunities allow youth to engage, exchange insights, and influence the future narrative of
      Internet governance in Afghanistan.
    </p>
    <a className="btn-main w-25 m-2" href="">Participante</a>
    <a className="btn-main w-25 m-2" href="">Volunteer</a>
    <a className="btn-main w-25 m-2" href="">Sponsor</a>
    <a className="btn-main w-25 m-2" href="">Partner</a>
    </div>
      <img className="w-50 ml-2 side-image"
        src={SideImage} alt="YouthIGFA" />
    </div>
    <h6 className="pl-4 title">Discover the various ways you can actively engage with YouthIGFA:</h6>
    <ol className="pl-5">
      <li>
        <span className="title">Participate:</span> Join our annual event and actively engage in discussions, workshops, and sessions. Your voice matters in shaping Afghanistan's digital future.
      </li>
      <br />
      <li>
        <span className="title">Volunteer:</span> Become a YouthIGFA volunteer and contribute your time and skills to support our initiatives. Volunteers play a crucial role in making our events and programs a success.
      </li>
      <br />
      <li>
        <span className="title">Sponsor:</span> Support our mission as a sponsor and enjoy the benefits of association. Your contribution empowers Afghan youth and positions your organization as a leader in the digital landscape
      </li>
      <br />
      <li>
        <span className="title">Partner:</span> Collaborate with us as a partner. By working together, we can amplify our efforts and create more opportunities for Afghan youth. Explore more!
      </li>
      <br />
      </ol>
    </div>
  )
}

export default GetInvolved;

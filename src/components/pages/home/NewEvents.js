import React from "react";
import UpCommingEvents from "../../../assets/upcomming.jpg";

const NewEvents = () => {
  return (
    <div className="about-snippet d-flex justify-content-between mt-5 h-100">
      <img className="w-50 ml-2 side-image" src={UpCommingEvents} alt="YouthIGFA" />
      <div className="pl-4 w-75 d-flex flex-column">
      <h2 className="title">Upcoming Events</h2>
      <div className="d-flex justify-content-start flex-column w-100 pl-4">
        <h4>2nd Youth IGF Afghanistan 2023</h4>
        <h6>Date: December 4, 2023</h6>
        <h6>Venue: Online</h6>
        <p>
            Join us as we explore the future of Internet governance, celebrate our successes, and plan
            our next moves.
        </p>
      </div>
      <a href="#events" className="text-center w-25 btn-main mb-5">Register Now</a>
      </div>
    </div>
  );
}

export default NewEvents;

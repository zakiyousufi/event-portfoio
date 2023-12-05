import React from "react";

const NewEvents = () => {
  return (
    <div className="new-events d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="title mt-5 mb-4">Upcoming Events</h2>
      <div className="d-flex justify-content-start flex-column w-100 p-4">
        <h4>2nd Youth IGF Afghanistan 2023</h4>
        <h6>Date: December 4, 2023</h6>
        <h6>Venue: Online</h6>
        <p>
            Join us as we explore the future of Internet governance, celebrate our successes, and plan
            our next moves.
        </p>
      </div>
      <a href="#events" className="btn-main mb-5">Register Now</a>
    </div>
  );
}

export default NewEvents;

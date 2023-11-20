import React from "react";

const NewsUpdates = () => {
  return (
    <div className="new-events d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="title mt-5 mb-2">News & Updates</h2>
      <div className="d-flex justify-content-start flex-column w-100 p-4">
        <p>
          Stay informed about the latest developments in Internet governance, youth empowerment,
          and digital technology. Check out our <a className="link" href="#">Press</a> section for insightful articles, event updates, and
          inspiring stories from Afghan youth.
          {' '}
          <a href="#" className="link">All the latest from YouthIGFA</a>
        </p>
      </div>
      <h2 className="title mt-5 mb-2">Testimonials</h2>
      <div className="d-flex justify-content-start flex-column w-100 p-4">
        <p>
          "The YouthIGFA opened doors for me I never knew existed. It's more than just a forum; it's a
          family, a movement."
          {' '}
          <a href="#" className="link">Farid, Participant 2019</a>
        </p>
        <p>
          "Partnering with YouthIGFA was an eye-opener. The dedication, knowledge, and energy
          these youngsters bring are unparalleled."
          {' '}
          <a href="#" className="link">Hosna, Digital Rights Advocate</a>
        </p>
      </div>
    </div>
  );
}

export default NewsUpdates;

import React from "react";
import Partner from "../../assets/partners.jpg";

const Partners = () => {
  return(
    <div className="d-flex flex-column home contact vh-100 pl-5 pr-5 pt-2 justify-content-center align-items-center">
      <h1 className="title">Partners</h1>
      <div className="d-flex justify-content-between mt-4 w-100">
        <div className=" d-flex flex-column pl-4 w-100 justify-content-center align-items-center">
          <h5 className="title">Together, Crafting Digital Destinies</h5>
          <p>
            No journey is solitary. Our partners, their trust, and their steadfast support have been the
            pillars on which YouthIGFA stands tall today. We cherish these collaborations, for they
            amplify our voice, our vision, and our vigor.
          </p>
          <h5 className="title">Our Partners:</h5>
          <p>
            Their logos are not just symbols; they represent a commitment, a promise towards a brighter
            digital Afghanistan.
            <br />
            Know more about the institutions and organizations that have joined hands with us.
            Meet Our Partners
            <br />
            <em>
              <a href="#" className="link">Become a Partner</a>
            </em>
            <br />
            <br />
            Believe in the digital promise of Afghan youth? Want to be a part of this transformative
            journey? Join us as a partner, and let's script history together.
            <br />
            <em>
              <a className="link mr-4" href="#">Partner With Us </a>
              <a className="link ml-4" href="#">Reach Out For More</a>
            </em>
            <br />
            <br />
            Whether it's through enriching resources, stories from the heart of the digital realm, or
            collaborative synergies, YouthIGFA continues its mission of crafting a brighter digital future
            for Afghanistan.
          </p>
        </div>
          <img className="w-50 ml-2 side-image"
          src={Partner} alt="YouthIGFA" />
      </div>
    </div>
  )
}

export default Partners;
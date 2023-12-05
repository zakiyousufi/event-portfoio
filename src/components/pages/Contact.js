import React from "react";
import ContactImg from "../../assets/contact.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="d-flex flex-column home contact vh-100 pl-5 pr-5 pt-2 justify-content-center align-items-center">
      <h1 className="title">Contact Us</h1>
      <div className="d-flex justify-content-between mt-5 w-100">
        <form className=" d-flex flex-column w-100 justify-content-center align-items-center">
          <input className="form-control mb-2 w-75" type="text" placeholder="Name" />
          <input className="form-control mb-2 w-75" type="email" placeholder="Email" />
          <input className="form-control mb-2 w-75" type="text" placeholder="Subject" />
          <textarea className="form-control mb-2 w-75" type="text" placeholder="Message" />
          <button className="btn-main w-75">Submit</button>
          <span className="d-flex justify-content-start w-75 mt-2">Phone: +93777777777</span>
          <span className="d-flex justify-content-start w-75 mt-2">Email:&nbsp;
            {' '}
            <a className="link" href="mailto:youth@igf.af"> youth@igf.af</a>
          </span>
          <span className="d-flex justify-content-start ml-5 mt-4">
            Your voice, your perspective matters to us. Whether it's an inquiry about our events, a
            suggestion for our initiatives, or a potential collaboration, we're all ears. Let's script the digital
            narrative of Afghanistan together.
          </span>
        </form>
        <div className="d-flex flex-column align-items-center w-100">
          <img className="w-100 ml-2 side-image"
          src={ContactImg} alt="YouthIGFA" />
           <div className="d-flex">
            <a className="link" href="https://www.facebook.com/YouthIGFA">
              <FaFacebook className="social-icon" />
            </a>
            <a className="link" href="https://twitter.com/YouthIGFA">
              <FaTwitter className="social-icon" />
            </a>
            <a className="link" href="https://www.instagram.com/youthigfa/">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

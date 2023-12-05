import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="title">Get in Touch</h2>
      <div className="d-flex justify-content-start flex-column w-100 pl-4">
        <p>
          Have questions or want to learn more about YouthIGFA? We're here to help! Feel
          free to reach out to us using the contact information below or use the inquiry form to
          send us a message. You can also connect with us on social media for the latest
          updates.
        </p>
        <div className="d-flex justify-content-start flex-column">
          <p>Email:
            {' '}
            <a href="mailto: youth@igfa.af" className="link">youth@igfa.af</a>
          </p>
          <p>Phone: +93777777777</p>
        </div>
      </div>
      <h2 className="title">Stay updated!</h2>
      <div className="d-flex justify-content-start flex-column pl-4">
        <p>
            Follow us on social media for the latest updates, news, and event announcements.
            Join the conversation and be part of YouthIGFA's vibrant online community
        </p>
      </div>
      <form className="d-flex flex-column w-50 align-items-center">
        <input type="email" placeholder="Enter your email here" className="input" />
        <input type="submit" value="Subscribe" className="btn-main submit" />
      </form>
      <div className="d-flex m-4">
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
      <p className="w-100 text-center mb-5">
        Copyright © 2023 Youth Internet Governance Forum Afghanistan. All rights reserved.
        <br />
        <a href="#" className="link">Privacy Policy</a>
        {' '}
        &
        {' '}
        <a href="#" className="link">Terms of Use</a>
      </p>
    </div>
  );
}

export default Footer;

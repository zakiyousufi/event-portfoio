import React from "react";
import Logo from "../assets/logo.png";
import "./style/sidebar.css";

import {
  FaHome, 
  FaInfoCircle, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaUsers, 
  FaBook, 
  FaNewspaper, 
  FaHandshake, 
  FaQuestionCircle, 
  FaPhone
 } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar col-md-2 col-sm-3 col-xs-12 p-l-0 p-r-0">
      <img
        alt="Logo (YouthIGFA)"
        className="logo img-responsive"
        src={Logo}
      />
      <div className="sidebar-content">
        <a href="#home" className="sidebar-link">
          Home
          {' '}
          <FaHome className="sidebar-icon" />
        </a>
        <a href="#about" className="sidebar-link">
          About
          {' '}
          <FaInfoCircle className="sidebar-icon" />
        </a>
        <a href="#events" className="sidebar-link">
          Events
          {' '}
          <FaCalendarAlt className="sidebar-icon" />
        </a>
        <a href="#program" className="sidebar-link">
          Program
          {' '}
          <FaGraduationCap className="sidebar-icon" />
        </a>
        <a href="#speakers" className="sidebar-link">
            Speakers
            {' '}
            <FaUsers className="sidebar-icon" />
        </a>
        <a href="#resources" className="sidebar-link">
          Resources
          {' '}
          <FaBook className="sidebar-icon" />
        </a>
        <a href="#press" className="sidebar-link">
          Press
          {' '}
          <FaNewspaper className="sidebar-icon" />
        </a>
        <a href="#partners" className="sidebar-link">
          Partners
          {' '}
          <FaHandshake className="sidebar-icon" />
        </a>
        <a href="#faq" className="sidebar-link">
          FAQ
          {' '}
          <FaQuestionCircle className="sidebar-icon" />
        </a>
        <a href="#contact" className="sidebar-link">
          Contact
          {' '}
          <FaPhone className="sidebar-icon" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
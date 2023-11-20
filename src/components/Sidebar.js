import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="sidebar-link">
          Home
          {' '}
          <FaHome className="sidebar-icon" />
        </Link>
        <Link to="/about" className="sidebar-link">
          About
          {' '}
          <FaInfoCircle className="sidebar-icon" />
        </Link>
        <Link to="/events" className="sidebar-link">
          Events
          {' '}
          <FaCalendarAlt className="sidebar-icon" />
        </Link>
        <Link to="/program" className="sidebar-link">
          Program
          {' '}
          <FaGraduationCap className="sidebar-icon" />
        </Link>
        <Link to="/speakers" className="sidebar-link">
            Speakers
            {' '}
            <FaUsers className="sidebar-icon" />
        </Link>
        <Link to="/resources" className="sidebar-link">
          Resources
          {' '}
          <FaBook className="sidebar-icon" />
        </Link>
        <Link to="/press" className="sidebar-link">
          Press
          {' '}
          <FaNewspaper className="sidebar-icon" />
        </Link>
        <Link to="/partners" className="sidebar-link">
          Partners
          {' '}
          <FaHandshake className="sidebar-icon" />
        </Link>
        <Link to="/faq" className="sidebar-link">
          FAQ
          {' '}
          <FaQuestionCircle className="sidebar-icon" />
        </Link>
        <Link to="/contact" className="sidebar-link">
          Contact
          {' '}
          <FaPhone className="sidebar-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

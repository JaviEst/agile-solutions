import React from "react";
import "../../pages/apm_course.css";

const CourseHeader = ({ bannerImage, title, startDate, endDate, location, onRegister }) => (
  <div className="course-header">
    <img src={bannerImage} alt={title} className="course-banner" />
    <h1 className="course-title">{title}</h1>
    <div className="course-header-details">
      <div><strong>Start Date</strong><br />{startDate}</div>
      <div><strong>End Date</strong><br />{endDate}</div>
      <div><strong>Location</strong><br />{location}</div>
    </div>
    <button className="register-btn" onClick={onRegister}>Register</button>
  </div>
);

export default CourseHeader; 
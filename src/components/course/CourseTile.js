import React from "react";
import "./CourseTile.css";

const CourseTile = ({ month, day, title, instructor, image, children }) => (
  <div className="course-tile">
    <div className="course-tile-date">
      <div className="course-tile-month">{month}</div>
      <div className="course-tile-day">{day}</div>
    </div>
    <div className="course-tile-info">
      <div className="course-tile-title">{title}</div>
      <div className="course-tile-instructor">{instructor}</div>
      {children}
    </div>
    <div className="course-tile-image">
      <img src={image} alt={title} />
    </div>
  </div>
);

export default CourseTile; 
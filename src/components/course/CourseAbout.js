import React from "react";
import "../../pages/apm_course.css";

const CourseAbout = ({ description }) => (
  <section className="course-about">
    <h2>About This Course</h2>
    <p>{description}</p>
  </section>
);

export default CourseAbout; 
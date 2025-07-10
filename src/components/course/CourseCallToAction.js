import React from "react";
import "../../pages/apm_course.css";

const CourseCallToAction = ({ title, onRegister }) => (
  <section className="course-cta">
    <h2>Ready to Transform Your Projects?</h2>
    <p>Enroll in our {title} and gain the skills to lead successful Agile projects.</p>
    <button className="register-btn" onClick={onRegister}>REGISTER</button>
  </section>
);

export default CourseCallToAction; 
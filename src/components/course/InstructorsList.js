import React from "react";
import "../../pages/apm_course.css";

const InstructorsList = ({ instructors }) => (
  <section className="course-instructors">
    <h3>Meet the Instructors</h3>
    <div className="instructors-list">
      {instructors.map((inst, idx) => (
        <div className="instructor-card" key={idx}>
          <div className="instructor-role">{inst.role}</div>
          <img src={inst.image} alt={inst.name} className="instructor-image" />
          <div className="instructor-name">{inst.name}</div>
          <div className="instructor-title">{inst.title}</div>
          <div className="instructor-bio">{inst.bio}</div>
        </div>
      ))}
    </div>
  </section>
);

export default InstructorsList; 
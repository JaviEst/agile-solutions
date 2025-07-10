import React from "react";
import "../../pages/apm_course.css";

const CourseHighlights = ({ highlights, length, effort, price }) => (
  <section className="course-highlights">
    <div className="course-highlights-content">
      <h3>What you'll learn?</h3>
      <ul className="course-highlights-list">
        {highlights.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
    <div className="course-details-box">
      <div><strong>Length</strong><br />{length}</div>
      <div><strong>Effort</strong><br />{effort}</div>
      <div><strong>Price</strong><br />{price}</div>
    </div>
  </section>
);

export default CourseHighlights; 
import React from "react";
import "../../pages/apm_course.css";

const CourseReviews = ({ reviews }) => (
  <section className="course-reviews">
    <h3>Reviews</h3>
    <div className="reviews-summary">
      <span className="reviews-average">{reviews.average} ★</span>
      <span className="reviews-count">{reviews.count} reviews</span>
      <div className="reviews-breakdown">
        {[5,4,3,2,1].map(star => (
          <div key={star} className="review-bar-row">
            <span>{star}</span>
            <div className="review-bar">
              <div className="review-bar-fill" style={{width: `${reviews.breakdown[star] || 0}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="reviews-list">
      {reviews.list.map((r, idx) => (
        <div className="review-card" key={idx}>
          <div className="review-header">
            <span className="reviewer-name">{r.name}</span>
            <span className="review-date">{r.date}</span>
            <span className="review-rating">{'★'.repeat(r.rating)}</span>
          </div>
          <div className="review-text">{r.text}</div>
          <div className="review-feedback">👍 {r.likes} &nbsp; 👎 {r.dislikes}</div>
        </div>
      ))}
    </div>
  </section>
);

export default CourseReviews; 
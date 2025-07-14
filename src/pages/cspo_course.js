import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CourseHeader from "../components/course/CourseHeader";
import CourseAbout from "../components/course/CourseAbout";
import CourseHighlights from "../components/course/CourseHighlights";
import InstructorsList from "../components/course/InstructorsList";
import CourseReviews from "../components/course/CourseReviews";
import CourseCallToAction from "../components/course/CourseCallToAction";
import "./apm_course.css";

const cspo_courseData = {
  bannerImage: "/course_description.png",
  title: "CSPO – Certified Scrum Product Owner",
  startDate: "September 5, 2024",
  endDate: "September 6, 2024",
  location: "Commonwealth Avenue, Boston",
  price: "$1000",
  length: "2 days",
  effort: "Full-time",
  description: (
    <div>
      <p>An advanced course for experienced product owners to prepare for the Scrum Product Owner certificate.</p>
      <p>A Scrum Product Owner generally comes from the business side of the organization. In the agile world, the product owner not only manages the vision and backlog, they also help focus the team on providing the outcomes that will delight the customers.</p>
      <p>After successfully completing the course, product owners will have experience as the conduit between the business and the rest of the scrum team. They’ll learn the skill set that will help them direct the backlog and impart their vision to the team. They will be asked to accept the CSPO License Agreement and complete their Scrum Alliance profile.</p>
      <p>Unlike any other training program, we offer the following bonuses:</p>
      <ul>
        <li>The highest passing rates: The CSPO certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li>
        <li>Free follow-up access to your course materials for one year.</li>
        <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li>
        <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li>
      </ul>
      <p><strong>Prerequisites:</strong> Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>
    </div>
  ),
  highlights: [
    "Vision and backlog management, customer outcomes focus",
    "Experience as conduit between business and scrum team",
  ],
  instructors: [
    {
      role: "Instructor 1",
      name: "Raj Heda",
      title: "Certified Agile Coach",
      bio: "Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results. Raj currently teaches in the Boston area at Boston University and Brandeis University.",
      image: "/instructor.png"
    },
  ],
  reviews: {
    average: 4.9,
    count: 160,
    breakdown: { 5: 75, 4: 18, 3: 4, 2: 2, 1: 1 },
    list: [
      {
        name: "Maria Lopez",
        date: "August 2024",
        rating: 5,
        text: "I got a lot from this class. I’m now able to better manage my team’s backlog, and our outcomes have really improved.",
        likes: 9,
        dislikes: 0
      },
      {
        name: "Allen Ma",
        date: "August 2024",
        rating: 5,
        text: "I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.",
        likes: 7,
        dislikes: 0
      }
    ]
  }
};

const CspoCoursePage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <div className="course-page">
        <div className="course-header-bg">
          <CourseHeader {...cspo_courseData} onRegister={handleRegister} />
        </div>
        <div className="section-bg">
          <CourseAbout description={cspo_courseData.description} />
        </div>
        <div className="section-bg">
          <CourseHighlights
            highlights={cspo_courseData.highlights}
            length={cspo_courseData.length}
            effort={cspo_courseData.effort}
            price={cspo_courseData.price}
          />
        </div>
        <div className="section-bg">
          <div className="course-instructors-reviews">
            <InstructorsList instructors={cspo_courseData.instructors} />
            <CourseReviews reviews={cspo_courseData.reviews} />
          </div>
        </div>
        <div className="course-cta-bg">
          <CourseCallToAction title={cspo_courseData.title} onRegister={handleRegister} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CspoCoursePage; 
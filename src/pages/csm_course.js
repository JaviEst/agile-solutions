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

const csm_courseData = {
  bannerImage: "/course_description.png",
  title: "Certified ScrumMaster (CSM) Training",
  startDate: "August 10, 2024",
  endDate: "August 11, 2024",
  location: "Commonwealth Avenue, Boston",
  price: "$1000",
  length: "2 days",
  effort: "Full-time",
  description: (
    <div>
      <p>A Certified ScrumMaster® is able to assist a scrum team to perform at their optimum level, as well as buffering the team from distractions. The certification process teaches the Scrum framework and enables CSMs to expand their career opportunities using Agile practices.</p>
      <p>Unlike any other training program, we offer the following bonuses:</p>
      <ul>
        <li>The highest passing rates: The CSM certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li>
        <li>Free follow-up access to your course materials for one year.</li>
        <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li>
        <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li>
      </ul>
      <p><strong>Prerequisites:</strong> Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>
    </div>
  ),
  highlights: [
    "Understanding of team roles, events and artifacts",
    "Eligibility to take the CSM test and complete Scrum Alliance profile",
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
    count: 180,
    breakdown: { 5: 80, 4: 15, 3: 3, 2: 1, 1: 1 },
    list: [
      {
        name: "Kate Ohem",
        date: "July 2024",
        rating: 5,
        text: "This class gave me the exposure to agile and the scrum process that I needed. Thanks!",
        likes: 10,
        dislikes: 0
      },
      {
        name: "Ahmed Kamal",
        date: "July 2024",
        rating: 5,
        text: "I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.",
        likes: 8,
        dislikes: 0
      }
    ]
  }
};

const CsmCoursePage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <div className="course-page">
        <div className="course-header-bg">
          <CourseHeader {...csm_courseData} onRegister={handleRegister} />
        </div>
        <div className="section-bg">
          <CourseAbout description={csm_courseData.description} />
        </div>
        <div className="section-bg">
          <CourseHighlights
            highlights={csm_courseData.highlights}
            length={csm_courseData.length}
            effort={csm_courseData.effort}
            price={csm_courseData.price}
          />
        </div>
        <div className="section-bg">
          <div className="course-instructors-reviews">
            <InstructorsList instructors={csm_courseData.instructors} />
            <CourseReviews reviews={csm_courseData.reviews} />
          </div>
        </div>
        <div className="course-cta-bg">
          <CourseCallToAction title={csm_courseData.title} onRegister={handleRegister} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CsmCoursePage; 
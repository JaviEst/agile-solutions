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

const apm_courseData = {
  bannerImage: "/course_description.png",
  title: "Professional Scrum Master Training",
  startDate: "July 15, 2024",
  endDate: "July 16, 2024",
  location: "Commonwealth Avenue, Boston",
  price: "$1,000",
  length: "2 Days",
  effort: "Full-time",
  description: (
    <div>
      <p>
        Apex’s Professional Scrum Master training courses prepare you for <a href="https://www.scrum.org/" target="_blank" rel="noopener noreferrer">Scrum.org</a>’s Professional Scrum Master levels 1, 2, and 3 examinations. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apex’s founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.
      </p>
      <p><strong>Training Overview</strong></p>
      <ul>
        <li>Scrum Master Level 1 certification requires a thorough understanding of Scrum fundamentals</li>
        <li>Scrum Master Level 2 certification requires an advanced mastery of both Scrum fundamentals and Scrum practice</li>
        <li>Scrum Master Level 3 certification requires a detailed mastery of Scrum practices.</li>
      </ul>
      <p><strong>Unlike any other training program, we offer the following bonuses:</strong></p>
      <ul>
        <li>The highest passing rates: The PSM certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li>
        <li>Free follow-up access to your course materials for one year.</li>
        <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li>
        <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li>
      </ul>
    </div>
  ),
  highlights: [
    "Apex’s Professional Scrum Master training is your pathway to Scrum Certification!"
  ],
  instructors: [
    {
      role: "Lead Instructor",
      name: "Raj Heda",
      title: "Certified Agile Coach",
      bio: "Raj Heda has been teaching software development and Agile courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results. Raj currently teaches in the Boston area at Boston University and Brandeis University.",
      image: "/instructor.png"
    },
  ],
  reviews: {
    average: 4.8,
    count: 225,
    breakdown: { 5: 70, 4: 20, 3: 5, 2: 3, 1: 2 },
    list: [
      {
        name: "Emily Carter",
        date: "June 10, 2024",
        rating: 5,
        text: "Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization.",
        likes: 12,
        dislikes: 2
      },
      {
        name: "Mark Thompson",
        date: "May 22, 2024",
        rating: 4,
        text: "Fantastic experience! Highly recommended! I am looking forward to sharing what I’ve learned with my enterprise.",
        likes: 8,
        dislikes: 1
      }
    ]
  }
};

const ApmCoursePage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <div className="course-page">
        <div className="course-header-bg">
          <CourseHeader {...apm_courseData} onRegister={handleRegister} />
        </div>
        <div className="section-bg">
          <CourseAbout description={apm_courseData.description} />
        </div>
        <div className="section-bg">
          <CourseHighlights
            highlights={apm_courseData.highlights}
            length={apm_courseData.length}
            effort={apm_courseData.effort}
            price={apm_courseData.price}
          />
        </div>
        <div className="section-bg">
          <div className="course-instructors-reviews">
            <InstructorsList instructors={apm_courseData.instructors} />
            <CourseReviews reviews={apm_courseData.reviews} />
          </div>
        </div>
        <div className="course-cta-bg">
          <CourseCallToAction title={apm_courseData.title} onRegister={handleRegister} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApmCoursePage; 
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
  bannerImage: "/banner-agile-trainers.png",
  title: "Agile Project Management Course",
  startDate: "July 15, 2024",
  endDate: "July 17, 2024",
  location: "Commonwealth Avenue, Boston",
  price: "$1,499",
  length: "3 Days",
  effort: "Full-time",
  description: `This Agile Project Management course provides a comprehensive understanding of Agile principles and practices. Participants will learn how to effectively manage projects using Agile methodologies, including Scrum and Kanban. The course covers key concepts such as Agile planning, iterative development, and continuous improvement. Through hands-on exercises and real-world case studies, attendees will gain practical skills to lead Agile teams and deliver successful projects.`,
  highlights: [
    "Understand Agile principles and methodologies",
    "Apply Scrum and Kanban frameworks to project management",
    "Lead and facilitate Agile teams effectively"
  ],
  instructors: [
    {
      role: "Lead Instructor",
      name: "Sarah Jones",
      title: "Certified Agile Coach",
      bio: "Agile Coach and Consultant with over 15 years of experience in Agile transformations.",
      image: "/instructor-sarah-jones.png"
    },
    {
      role: "Co-Instructor",
      name: "David Lee",
      title: "Agile Project Management Expert",
      bio: "Certified Scrum Master and Agile Trainer, specializing in team collaboration and Agile adoption.",
      image: "/instructor-david-lee.png"
    }
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
        text: "Excellent course! The instructors were knowledgeable and engaging, and the content highly relevant to my work. I feel much more confident in applying Agile principles now.",
        likes: 12,
        dislikes: 2
      },
      {
        name: "Mark Thompson",
        date: "May 22, 2024",
        rating: 4,
        text: "The course provided a good overview of Agile methodologies. While the content was solid, I would have appreciated more hands-on exercises.",
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
        <CourseHeader {...apm_courseData} onRegister={handleRegister} />
        <CourseAbout description={apm_courseData.description} />
        <CourseHighlights
          highlights={apm_courseData.highlights}
          length={apm_courseData.length}
          effort={apm_courseData.effort}
          price={apm_courseData.price}
        />
        <div className="course-instructors-reviews">
          <InstructorsList instructors={apm_courseData.instructors} />
          <CourseReviews reviews={apm_courseData.reviews} />
        </div>
        <CourseCallToAction title={apm_courseData.title} onRegister={handleRegister} />
      </div>
      <Footer />
    </>
  );
};

export default ApmCoursePage; 
import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CourseTile from "../components/course/CourseTile";
import "./courses.css";

const courses = [
  // 20 template courses for pagination demo
  {
    month: "Aug", day: "12", title: "Certified Scrum Product Owner (CSPO)", instructor: "Raj Heda", image: "/course1.png"
  },
  {
    month: "Sep", day: "8", title: "Professional Scrum Master (PSM)", instructor: "Raj Heda", image: "/course3.png"
  },
  {
    month: "Dec", day: "2", title: "Certified Scrum Master", instructor: "Raj Heda", image: "/course4.png"
  },
  {
    month: "Aug", day: "21", title: "Professional Scrum Product Owner (PSPO)", instructor: "J. Henry", image: "/course2.png"
  },
  {
    month: "Dec", day: "8", title: "Certified Scrum Developer", instructor: "Sarah Lee", image: "/course5.png"
  },
  {
    month: "Jan", day: "15", title: "Agile Fundamentals", instructor: "Alex Kim", image: "/course1.png"
  },
  {
    month: "Feb", day: "10", title: "Kanban Essentials", instructor: "Priya Patel", image: "/course2.png"
  },
  {
    month: "Mar", day: "5", title: "Scrum for Teams", instructor: "Miguel Torres", image: "/course3.png"
  },
  {
    month: "Apr", day: "18", title: "Agile Leadership", instructor: "Emily Carter", image: "/course4.png"
  },
  {
    month: "May", day: "22", title: "DevOps Bootcamp", instructor: "Mark Thompson", image: "/course5.png"
  },
  {
    month: "Jun", day: "30", title: "Product Owner Masterclass", instructor: "Linda Green", image: "/course1.png"
  },
  {
    month: "Jul", day: "7", title: "Scrum Mastery", instructor: "Chris Brown", image: "/course2.png"
  },
  {
    month: "Aug", day: "14", title: "Agile for Executives", instructor: "Nina Wang", image: "/course3.png"
  },
  {
    month: "Sep", day: "19", title: "Agile QA Essentials", instructor: "Omar Farouk", image: "/course4.png"
  },
  {
    month: "Oct", day: "25", title: "Scaling Agile", instructor: "Julia Roberts", image: "/course5.png"
  },
  {
    month: "Nov", day: "3", title: "Agile Portfolio Management", instructor: "Sam Lee", image: "/course1.png"
  },
  {
    month: "Dec", day: "12", title: "Scrum in Practice", instructor: "Tina White", image: "/course2.png"
  },
  {
    month: "Jan", day: "20", title: "Agile for Startups", instructor: "Victor Hugo", image: "/course3.png"
  },
  {
    month: "Feb", day: "28", title: "Agile Metrics & Reporting", instructor: "Wendy Smith", image: "/course4.png"
  },
  {
    month: "Mar", day: "15", title: "Agile Transformation", instructor: "Zara Khan", image: "/course5.png"
  }
];

const COURSES_PER_PAGE = 10;

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const startIdx = (currentPage - 1) * COURSES_PER_PAGE;
  const endIdx = startIdx + COURSES_PER_PAGE;
  const paginatedCourses = courses.slice(startIdx, endIdx);

  const uniqueCourseTitles = [
    ...new Set(courses.map(course => course.title))
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="courses-main">
        <section className="courses-hero">
          <div className="courses-hero-container">
            <img src="/courses.png" alt="Courses Hero" className="courses-hero-img" />
            <input
              className="courses-search"
              type="text"
              placeholder="Search courses"
            />
            <div className="courses-filters-calendar-row">
              <div className="courses-filter-card">
                <div className="courses-filters-title">Filter Courses</div>
                <div className="courses-filters">
                    <div style={{ position: 'relative', width: '100%' }}>
                      <button
                        onClick={() => setDropdownOpen(v => !v)}
                        style={{ width: '100%' }}
                      >
                        All Courses
                      </button>
                      {dropdownOpen && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          padding: '8px 0',
                          width: '100%',
                          background: '#fff',
                          border: '1.5px solid #dbeafe',
                          borderRadius: '0 0 10px 10px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                          zIndex: 10,
                          maxHeight: '220px',
                          overflowY: 'auto'
                        }}>
                          {uniqueCourseTitles.map((title, idx) => (
                            <button
                              key={idx}
                              style={{
                                width: '100%',
                                border: 'none',
                                borderBottom: idx !== uniqueCourseTitles.length - 1 ? '1px solid #eee' : 'none',
                                background: 'none',
                                padding: '10px 0',
                                textAlign: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              {title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  <button>All Types</button>
                  <button>All Levels</button>
                  <button>All Cities</button>
                  <button>All Trainers</button>
                  <button>All Partners</button>
                </div>
              </div>
              <div className="courses-calendar">
                <div className="courses-calendar-title">Course Calendar</div>
                <div className="courses-calendar-widget">[Calendar Here]</div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-list-section">
          <div className="courses-list-container">
            <h2 className="courses-list-title">Upcoming Courses</h2>
            <div className="courses-list">
              {paginatedCourses.map((course, idx) => (
                <CourseTile key={idx + (currentPage-1)*COURSES_PER_PAGE} {...course} />
              ))}
            </div>
            <div className="courses-pagination">
              <span>Page</span>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`courses-page-btn${currentPage === i + 1 ? ' active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CoursesPage;
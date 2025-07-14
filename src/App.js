import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';  
import AssessmentPage from './pages/assessment';
import TrainingPage from './pages/training';
import CoachingPage from './pages/coaching';
import ResourcesPage from './pages/resources';
import RegisterPage from './pages/register';
import CoursesPage from './pages/courses';
import ApmCoursePage from './pages/apm_course';
import CsmCoursePage from './pages/csm_course';
import CspoCoursePage from './pages/cspo_course';
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/upcoming-courses" element={<CoursesPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/apm" element={<ApmCoursePage />} />
        <Route path="/courses/csm" element={<CsmCoursePage />} />
        <Route path="/courses/cspo" element={<CspoCoursePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

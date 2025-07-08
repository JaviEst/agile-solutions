import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';  
import AssessmentPage from './pages/assessment';
import TrainingPage from './pages/training';
import CoachingPage from './pages/coaching';
import ResourcesPage from './pages/resources';
import RegisterPage from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

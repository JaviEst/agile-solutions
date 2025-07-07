import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';  
import AssessmentPage from './pages/assessmentpage';
import TrainingPage from './pages/trainingpage';
import CoachingPage from './pages/coachingpage';
import ResourcesPage from './pages/resourcespage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

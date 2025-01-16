import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import BioPage from "./pages/BioPage";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />  {/* Updated to /dashboard */}
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

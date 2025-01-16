import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; 
import { signOut } from "firebase/auth"; 
import ProjectsDisplay from "../pages/ProjectsDisplay";
import SkillsDisplay from "../pages/SkillsDisplay";
import BioDisplay from "../pages/BioDisplay";

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate("/login"); 
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {}
      <button onClick={handleLogout}>Logout</button>

      <section>
        <h2>Manage Bio</h2>
        <Link to="/bio">Add Bio</Link> {}
      </section>

      <section>
        <h2>Manage Skills</h2>
        <Link to="/skills">Add Skill</Link> {}
      </section>

      <section>
        <h2>Manage Projects</h2>
        <Link to="/project">Add Project</Link> {}
      </section>

      <section>
        <h2>Display Bio</h2>
        <BioDisplay /> {}
      </section>

      <section>
        <h2>Display Skills</h2>
        <SkillsDisplay /> {}
      </section>

      <section>
        <h2>Display Projects</h2>
        <ProjectsDisplay /> {}
      </section>
    </div>
  );
};

export default Dashboard;

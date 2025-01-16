import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const ProjectsDisplay = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Project Link
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectsDisplay;

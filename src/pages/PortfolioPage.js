import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setProjects(snapshot.docs.map((doc) => doc.data()));
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;

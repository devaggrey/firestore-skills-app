import React, { useState } from "react";
import { db } from "../firebase/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); 

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title,
        description,
        link,
        createdAt: new Date(),
      });
      setSuccess("Project added successfully!"); 
      setError(null); 
      setTitle("");
      setDescription("");
      setLink("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Error adding project: " + err.message); 
      setSuccess(null); 
    }
  };

  return (
    <div>
      <h3>Add Project</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>} {}
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter project link (optional)"
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;

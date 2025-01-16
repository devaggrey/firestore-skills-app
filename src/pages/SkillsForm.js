import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SkillsForm = () => {
  const [skill, setSkill] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();  

  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "skills"), {
        skill,
      });
      setSuccess("Skill added successfully!"); 
      setError(null); 
      setSkill(""); 
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Error adding skill: " + err.message); 
      setSuccess(null); 
    }
  };

  return (
    <div>
      <h3>Add Skill</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>} {
    }
      <form onSubmit={handleAddSkill}>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter new skill"
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default SkillsForm;

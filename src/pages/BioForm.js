import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BioForm = () => {
  const [bio, setBio] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleAddBio = async (e) => {
    e.preventDefault();
    try {
      const bioDocRef = doc(db, "bio", "admin-bio");
      await setDoc(bioDocRef, {
        bio,
      });
      setSuccess("Bio updated successfully!");
      setError(null); 
      setBio(""); 

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Error adding bio: " + err.message); 
      setSuccess(null); 
    }
  };

  return (
    <div>
      <h3>Add Bio</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleAddBio}>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter your bio"
        />
        <button type="submit">Add Bio</button>
      </form>
    </div>
  );
};

export default BioForm;

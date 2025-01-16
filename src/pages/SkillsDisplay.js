import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase"; // Ensure this path is correct
import { collection, getDocs } from "firebase/firestore";

const SkillsDisplay = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: loading state
  const [error, setError] = useState(null); // Optional: error state

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsCollection = collection(db, "skills");
        const skillsSnapshot = await getDocs(skillsCollection);
        const skillsList = skillsSnapshot.docs.map((doc) => doc.data());
        setSkills(skillsList);
      } catch (error) {
        console.error("Error fetching skills:", error); // Log any error
        setError(error.message); // Set error state to display in UI
      } finally {
        setLoading(false); // Set loading state to false after fetch is complete
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Skills</h3>
      {skills.length === 0 ? (
        <p>No skills available.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Skill</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.skill}</td> {/* Ensure 'skill' matches the field name in Firestore */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SkillsDisplay;

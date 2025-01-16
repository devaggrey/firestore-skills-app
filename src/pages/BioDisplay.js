import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const BioDisplay = () => {
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchBio = async () => {
      const bioCollection = collection(db, "bio");
      const bioSnapshot = await getDocs(bioCollection);
      const bioData = bioSnapshot.docs.map((doc) => doc.data());
      if (bioData.length > 0) {
        setBio(bioData[0].bio);
      }
    };

    fetchBio();
  }, []);

  return (
    <div>
      <h3>Bio</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bio ? bio : "No bio available."}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BioDisplay;

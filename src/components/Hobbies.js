import React from "react";

const hobbies = [
  "Cricket",
  "Volleyball",
  "Open Source Contributions"
];

function Hobbies() {
  return (
    <section className="section" id="hobbies">
      <div className="section-title">Hobbies & Interests</div>
      <ul className="skills-list">
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </section>
  );
}
export default Hobbies;

import React from "react";

const skills = {
  "Languages": ["Java", "Core Java"],
  "Frontend": ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap"],
  "Backend": ["Spring Boot", "REST APIs"],
  "Databases": ["MySQL"],
  "Version Control & Tools": ["Git", "GitHub", "Postman"]
};

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-title">Technical Skills</div>
      {Object.entries(skills).map(([group, list]) => (
        <div key={group}>
          <b>{group}:</b>
          <ul className="skills-list">
            {list.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Skills;

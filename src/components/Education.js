import React from "react";

const education = [
  {
    school: "Mahaveer Institute of Science & Technology, JNTUH",
    degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
    duration: "2020 – 2024"
  },
  {
    school: "Sri Gayatri Junior College, TS Board of Intermediate Education",
    degree: "Intermediate (MPC)",
    duration: "2018 – 2020"
  },
  {
    school: "Bharathi High School, TS Board of Secondary Education",
    degree: "Secondary School Certificate (SSC)",
    duration: "2018"
  }
];

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-title">Education</div>
      {education.map((edu, idx) => (
        <div className="education-item" key={idx}>
          <b>{edu.degree}</b>
          <div>{edu.school}</div>
          <div><small>{edu.duration}</small></div>
        </div>
      ))}
    </section>
  );
}
export default Education;

import React from "react";
const experiences = [
  {
    company: "AIV",
    role: "Full Stack Java Developer Intern",
    duration: "March 2025 – June 2025",
    details: [
      "Developed modular web components using Spring Boot and ReactJS.",
      "Built and integrated secure REST APIs with Spring Security and JWT authentication.",
      "Collaborated using Agile methodologies and version control workflows (Git/GitHub).",
      "Participated in code reviews, sprint planning, and CI/CD pipeline execution."
    ]
  }
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-title">Work Experience</div>
      {experiences.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <b>{exp.role}</b> — {exp.company}
          <div><small>{exp.duration}</small></div>
          <ul>
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Experience;

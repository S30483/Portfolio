import React from "react";

const project = [
  {
    name: "HR Management System",
    stack: "ReactJS, Spring Boot, MySQL",
    highlights: [
      "Created a scalable HR system supporting employee CRUD, leave tracking, and recruitment workflows.",
      "Built secure authentication with Spring Security and JWT-based role-based access control.",
      "Designed and deployed responsive UIs using ReactJS and Bootstrap."
    ]
  },
  {
    name: "SONAR Rock vs Mine Prediction",
    stack: "Scikit-learn",
    highlights: [
      "Built a classification ML model to identify underwater objects from sonar data.",
      "Achieved 89% accuracy by fine-tuning classifiers and feature engineering.",
      "Evaluated models using confusion matrices and precision/recall analysis."
    ]
  },
  {
    name: "Accident Detection Using CNN",
    stack: "TensorFlow",
    highlights: [
      "Developed a real-time accident detection system using CNNs for object classification.",
      "Trained the model on image datasets and achieved over 92% accuracy.",
      "Designed the solution to trigger alert responses in future deployment plans."
    ]
  }
];

function Project() {
  return (
    <section className="section" id="projects">
      <div className="section-title">Projects</div>
      {project.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h4>{proj.name}</h4>
          <div className="stack">{proj.stack}</div>
          <ul>
            {proj.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Project;

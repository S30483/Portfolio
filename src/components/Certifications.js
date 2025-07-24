import React from "react";

const certifications = [
  {
    name: "Full Stack Java Developer Certification",
    provider: "ExcelR",
    duration: "Mar 2025 – May 2025",
    summary: "Completed with distinction, covering advanced Java, Spring Boot, and front-end technologies."
  }
];

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-title">Certifications & Training</div>
      {certifications.map((cert, idx) => (
        <div className="certification-item" key={idx}>
          <b>{cert.name}</b> — {cert.provider}
          <div><small>{cert.duration}</small></div>
          <p>{cert.summary}</p>
        </div>
      ))}
    </section>
  );
}
export default Certifications;

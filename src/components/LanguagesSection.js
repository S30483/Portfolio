import React from "react";

const languages = ["English", "Hindi", "Telugu"];
function LanguagesSection() {
  return (
    <section className="section" id="languages">
      <div className="section-title">Languages Known</div>
      <ul className="skills-list">
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
    </section>
  );
}
export default LanguagesSection;

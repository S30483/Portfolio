import React from "react";
import About from "./About";
import Skills from "./Skills";
import project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import LanguagesSection from "./LanguagesSection";
import Hobbies from "./Hobbies";

function MainContent() {
  return (
    <main>
      <About />
      <Skills />
      <project/>
      <Experience />
      <Education />
      <Certifications />
      <LanguagesSection />
      <Hobbies />
    </main>
  );
}
export default MainContent;

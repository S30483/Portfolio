import React from "react";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Certifications", link: "#certifications" },
  { name: "Languages", link: "#languages" },
  { name: "Hobbies", link: "#hobbies" },
  { name: "Contact", link: "#contact" },
];

function Sidebar() {
  return (
    <nav className="sidebar">
      {navItems.map((item) => (
        <a key={item.link} href={item.link}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
export default Sidebar;

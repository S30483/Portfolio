import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>Meenugu Srinivas</h1>
        <span style={{color: '#4a4e69'}}>Full Stack Developer | B.Tech CSE</span>
      </div>
      <div className="social-links">
        <a href="https://github.com/S30483" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/meenugu-srinivas-847153294" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:meenugusrinivas.15@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
      </div>
    </header>
  );
}
export default Header;

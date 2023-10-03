import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import profile from '../images/profile-pic.jpg';
import hamburger from '../images/hamburger.png';
import { useState } from "react";

function Navbar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <nav className="navigation">
      <HashLink smooth to="/#about" className="header hbox" onClick={() => { setIsMenuExpanded(false); }}>
        <img src={profile} className="logo" alt="Profile"/>

        <p className="name">Micah Beech</p>
      </HashLink>

      <button className="hamburger" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>
        <img src={hamburger} alt="Hamburger Menu" className="icon"/>
      </button>

      <div className={isMenuExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <HashLink smooth to="/#work" onClick={() => { setIsMenuExpanded(false); }}>
              <p>Work</p>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" onClick={() => { setIsMenuExpanded(false); }}>
              <p>Projects</p>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#education" onClick={() => { setIsMenuExpanded(false); }}>
              <p>Education</p>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" onClick={() => { setIsMenuExpanded(false); }}>
              <p>Contact</p>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

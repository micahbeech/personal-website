import { useState } from "react";
import "../styles/Navbar.css";
import hamburger from "../icons/hamburger.svg";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <HashLink smooth to="/#home" className="main-name">
        Micah Beech
      </HashLink>

      <button 
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <img src={hamburger} alt="Hamburger menu"/>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <HashLink smooth to="/#work">Work</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#education">Education</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

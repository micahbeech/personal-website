import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import profile from '../icons/profile-pic.jpg';
import hamburger from '../icons/hamburger.png';
import { useState } from "react";

function Navbar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <nav className="navigation">
      <HashLink smooth to="/#about" className="header hbox">
        <img src={profile} className="logo" alt="Profile"/>

        <p className="name">Micah Beech</p>
      </HashLink>

      <button className="hamburger" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>
        <img src={hamburger} alt="Hamburger Menu" className="icon"/>
      </button>

      <div className={isMenuExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <HashLink smooth to="/#work" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>Work</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#education" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>Education</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" onClick={() => { setIsMenuExpanded(!isMenuExpanded); }}>Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

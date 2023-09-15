import { useState } from "react";
import "../styles/Navbar.css";
import hamburger from "../icons/hamburger.svg";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Link to="" className="main-name">
        Micah Beech
      </Link>

      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={hamburger}/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#resume">Resume</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">Projects</HashLink>
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

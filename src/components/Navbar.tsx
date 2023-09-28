import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import profile from '../icons/profile-pic.jpg';

function Navbar() {
  return (
    <nav className="navigation">
      <HashLink smooth to="/#about" className="header hbox">
        <img src={profile} className="logo" alt="Profile"/>

        <p className="name">Micah Beech</p>
      </HashLink>

      <div className="navigation-menu">
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

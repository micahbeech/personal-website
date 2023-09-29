import { useState, useEffect } from 'react';
import logo from "../icons/profile-pic.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="hbox page">
      <img src={logo} className="rounded profile" alt="Profile"/>

      <div className="content vbox">
        <h1 className="name">Micah Beech</h1>

        <AboutHeader/>

        <p>Industry experience in DevOps, server side, and mobile development.</p>
        <p>Singing, acting, and rock climbing in my free time.</p>
      </div>
    </div>
  );
}

const identifiers = [
  'Software Developer', 
  'Computer Science Graduate', 
  'Community Theatre Actor',
  'Rock Climber',
  'Hockey Player',
  'Chorister',
];

function AboutHeader() {
  const [index, setIndex] = useState(0);
  const text = identifiers[index % identifiers.length];

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => i + 1), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <i key={text} className="header">{text}.</i>
  );
}

export default Home;

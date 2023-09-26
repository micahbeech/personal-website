import { useState, useEffect } from 'react';
import logo from "../icons/profile-pic.jpg";
import "../styles/Home.css";
import "../styles/Section.css";

function Home() {
  return (
    <section id="about">
      <div className="about">
        <img src={logo} className="rounded" alt="Profile" width="360" height="360"/>

        <div className="content">
          <h1>Micah Beech</h1>

          <AboutHeader/>

          <p>Industry experience in DevOps, server side, and mobile development.</p>
          <p>Building efficient, high-quality, and secure software at scale.</p>
          <p>Singing, acting, and rock climbing in my free time.</p>
        </div>
      </div>
    </section>
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

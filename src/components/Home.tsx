import { useState, useEffect } from 'react';
import logo from "../icons/profile-pic.jpg";
import "../styles/Home.css";
import "../styles/Section.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="about">
        <img src={logo} className="rounded" alt="Profile" width="300"/>

        <div className="content">
          <AboutHeader/>

          <p className="description">Something about me</p>
        </div>
      </div>
    </section>
  );
}

const identifiers = ['Big Cock Daddy', 'CS Loser', 'Cutie'];

function AboutHeader() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(identifiers[index]);

  useEffect(() => {
    const interval = setInterval(() => { setIndex(i => i + 1); }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => setText(identifiers[index % identifiers.length]), [index])

  return (
    <h1 key={text} className="header">{text}.</h1>
  );
}

export default Home;

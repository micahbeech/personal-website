import '../styles/Education.css';
import waterloo from '../icons/waterloo.png';

function Education() {
  return (
    <section id="education" className="education">
      <div className="horizontal-container">
        <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noreferrer">
          <img src={waterloo} className="rounded logo" alt="University of Waterloo"/>
        </a>

        <div className="content">
          <h1>Bachelor of Computer Science</h1>

          <p>2018 - 2023</p>

          <p>Graduated with Distinction, Honours</p>

          <p>Diploma in French Language I</p>
        </div>
      </div>
    </section>
  );
}

export default Education;

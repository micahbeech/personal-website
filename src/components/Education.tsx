import '../styles/Education.css';
import waterloo from '../icons/waterloo.png';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <img src={waterloo} className="logo" alt="University of Waterloo"/>

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

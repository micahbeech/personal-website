import '../styles/Education.css';
import waterloo from '../icons/waterloo.png';

const courses = [
  {
    name: "Computer Security and Privacy",
    code: "CS 458",
    term: "Spring 2023",
    grade: "95",
    link: "https://crysp.uwaterloo.ca/courses/cs458/S23-material/S23-syllabus.html",
  },
  {
    name: "Introduction to Artificial Intelligence",
    code: "CS 486",
    term: "Spring 2023",
    grade: "82",
    link: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs486-spring23/",
  },
  {
    name: "Software Design and Architectures",
    code: "CS 446",
    term: "Spring 2022",
    grade: "88",
    link: "https://cs.uwaterloo.ca/~m2nagapp/courses/CS446/1225/",
  },
  {
    name: "Human-Computer Interaction",
    code: "CS 449",
    term: "Spring 2022",
    grade: "89",
    link: "https://cs.uwaterloo.ca/~jianzhao/cs449-649/",
  },
  {
    name: "Numerical Computation",
    code: "CS 370",
    term: "Spring 2022",
    grade: "98",
    link: "https://cs.uwaterloo.ca/current/courses/course_descriptions/cDescr/CS370",
  },
  {
    name: "Concurrent and parallel Programming",
    code: "CS 343",
    term: "Fall 2021",
    grade: "91",
    link: "https://student.cs.uwaterloo.ca/~cs343",
  },
]

function Education() {
  return (
    <div className="vbox page content">
      <div className="hbox">
        <a href="https://cs.uwaterloo.ca/">
          <img src={waterloo} className="rounded logo" alt="University of Waterloo"/>
        </a>

        <div className="overview">
          <h1>Bachelor of Computer Science</h1>

          <p>2018 - 2023</p>

          <p>Graduated with Distinction, Honours</p>

          <p>Diploma in French Language I</p>
        </div>
      </div>

      <h3>Selected Coursework</h3>
      
      <div className="courses">
        {courses.map((course) => {
          return (
            <a key={course.name} href={course.link}>
              <div className="rounded card">
                <h4>{course.name} ({course.code})</h4>
                <i>{course.term}</i>
                <p>Grade: {course.grade}%</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Education;

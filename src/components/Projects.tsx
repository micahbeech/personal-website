import '../styles/Projects.css';
import speed from '../images/internet-speed.png';
import hitron from '../images/hitron.png';
import sorting from '../images/sorting.gif';

const projects = [
  {
    title: "Internet Speed Monitor",
    language: "Python",
    descriptions: [
      "Independent project.",
      "Tooling to track your internet speed over time and visualize the results.",
      "The project includes email support to deliver reports directly into your inbox and an installation wizard for quick setup.",
    ],
    link: "https://github.com/micahbeech/speedtest-monitor",
    image: speed,
    imageText: "Internet Speed",
    imageId: "speed",
  },
  {
    title: "Hitron CLI",
    language: "Python",
    descriptions: [
      "Independent project.",
      "Command Line Interface for interacting with the Hitron CODA-4598 modem.",
      "The tool comes with a number of customizations and thorough documentation for easy adoption by other users.",
    ],
    link: "https://github.com/micahbeech/hitron-cli",
    image: hitron,
    imageText: "Hitron Router",
    imageId: "hitron",
  },
  {
    title: "Sorting Visualizer",
    language: "Swift",
    descriptions: [
      "Independent project.",
      "iOS app designed to visualize sorting algorithms.",
      "Implementations of Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort, Bubble Sort, and Bogo Sort.",
    ],
    link: "https://github.com/micahbeech/Sorting",
    image: sorting,
    imageText: "Sorting",
    imageId: "sorting",
  },
]

function Projects() {
  return (
    <div className="vbox page projects">
      {projects.map((project) => {
        return (
          <div key={project.title} className="project">
            <div className="card">
              {project.link === "" ? <h1 className="header">{project.title}</h1> :
                <a href={project.link}>
                  <h1 className="header">{project.title}</h1>
                </a>
              }
              
              <span className="vertical-separator"/>

              <i>{project.language}</i>

              {project.descriptions.map((description) => {
                return (<p key={description}>{description}</p>);
              })}
            </div>

            <img src={project.image} className="image" id={project.imageId} alt={project.imageText}/>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

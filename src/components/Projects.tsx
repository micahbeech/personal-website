import '../styles/Projects.css';
import hitron from '../images/hitron.png';
import veggies from '../images/vegetables.webp';
import sorting from '../images/sorting.gif';

const projects = [
  {
    title: "Neighbourhood Garden",
    language: "Swift",
    descriptions: [
      "Independent project.",
      "Pure SwiftUI mobile app using frameworks including Swinject, SwiftGen, SwiftLint, SwiftyMocky.",
      "Facilitates local sharing of fresh produce, aiming to promote sustainable lifestyles and community connection.",
    ],
    link: "https://github.com/micahbeech/NeighbourhoodGarden",
    image: veggies,
    imageText: "Vegetables",
    imageId: "garden",
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
    <div className="vbox page">
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

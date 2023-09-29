import '../styles/Projects.css';
import hitron from '../icons/hitron.png';
import veggies from '../icons/vegetables.webp';
import house from '../icons/house.jpeg';

const projects = [
  {
    title: "House Sharing",
    language: "Kotlin",
    descriptions: [
      "Built for Software Design and Architectures course (CS 446), University of Waterloo, Spring 2022.",
      "Native Android app built using Jetpack Compose, Firebase, and LiveData.",
      "Group project (source code not available).",
    ],
    link: "",
    image: house,
    imageText: "House",
    imageFit: "cover",
  },
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
    imageFit: "cover",
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
    imageFit: "contain",
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

            <img src={project.image} className={`image ${project.imageFit}`} alt={project.imageText}/>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

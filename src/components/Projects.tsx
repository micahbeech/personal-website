import '../styles/Projects.css';
import hitron from '../icons/hitron.png';
import veggies from '../icons/vegetables.webp';
import house from '../icons/house.jpeg';
import link from '../icons/link.png';

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
  },
  {
    title: "Hitron CLI",
    language: "Python",
    descriptions: [
      "Command Line Interface for interacting with the Hitron CODA-4598 modem.",
      "The tool comes with a number of customizations and thorough documentation for easy adoption by other users.",
    ],
    link: "https://github.com/micahbeech/hitron-cli",
    image: hitron,
    imageText: "Hitron Router",
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        {projects.map((project) => {
          return (
            <div key={project.title} className="project rounded">
              <div className="card">
                <h1 className="header">{project.title}</h1>
                
                <span className="vertical-separator"/>

                <i>{project.language}</i>

                {project.link === "" ? <></> :
                  <span>
                    <span className="vertical-separator"/>

                    <a href={project.link}>
                      <img src={link} className="link" alt="Link"/>
                    </a>
                  </span>
                }

                {project.descriptions.map((description) => {
                  return (<p key={description}>{description}</p>);
                })}
              </div>

              <img src={project.image} className="image" alt={project.imageText}/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

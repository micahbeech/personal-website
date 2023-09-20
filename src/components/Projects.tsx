import '../styles/Projects.css';

const projects = [
  {
    title: "Neighbourhood Garden",
    language: "Swift",
    description: "Content",
  },
  {
    title: "Hitron CLI",
    language: "Python",
    description: "Content",
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        {projects.map((project) => {
          return (
            <div className="card rounded">
              <h1>{project.title}</h1>

              <i>{project.language}</i>

              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

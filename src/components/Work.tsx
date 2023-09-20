import '../styles/Work.css';
import faire from '../icons/faire.avif';
import codeWithChris from '../icons/codewithchris.jpeg';
import vitalImages from '../icons/vital.jpeg';

const jobs = [
  {
    id: "faire",
    name: "Faire",
    logo: faire,
    date: "2021 - Present",
    items: [
      {
        title: "Platform Engineer",
        description: "Really cool stuff",
      },
      {
        title: "Backend Engineer",
        description: "Really cool stuff",
      },
      {
        title: "iOS Engineer",
        description: "Really cool stuff",
      },
    ]
  },
  {
    id: "cwc",
    name: "Code With Chris",
    logo: codeWithChris,
    date: "2021 Internship",
    items: [
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
    ]
  },
  {
    id: "vital",
    name: "Vital Images",
    logo: vitalImages,
    date: "2020 Internship",
    items: [
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
      {
        title: "Thing I Did",
        description: "Really cool stuff",
      },
    ]
  }
]

function Work() {
  return (
    <section id="work" className="work">
      <div className="scrolling-wrapper">
        {jobs.map((job) => {
          return (
            <div className="card" id={job.id}>
              <img src={job.logo} className="rounded logo" alt={job.name}/>

              <b className="subtitle">{job.date}</b>
    
              <div className="content">
                {job.items.map((item) => {
                  return (
                    <div className="item">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
    
              <div className="dot-switcher">
                {jobs.map((dotJob) => {
                  return (<span className={job.id === dotJob.id ? "dot highlighted" : "dot"}/>);
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Work;

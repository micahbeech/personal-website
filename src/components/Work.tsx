import '../styles/Work.css';
import faire from '../icons/faire.avif';
import codeWithChris from '../icons/codewithchris.jpeg';
import vitalImages from '../icons/vital.jpeg';
import { useEffect, useState } from 'react';

type JobItem = {
  title: string;
  description: string;
}

type Job = {
  id: string;
  name: string;
  logo: string;
  date: string;
  items: JobItem[];
}

const jobs: Job[] = [
  {
    id: "faire",
    name: "Faire",
    logo: faire,
    date: "2021 - Present",
    items: [
      {
        title: "Security Mitigation",
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
  const [jobId, setJobId] = useState(jobs[0].id);

  return (
    <section id="work" className="work">
      <div className="switcher">
        <div className="scrolling-wrapper">
          {jobs.map((job) => { return (<JobCard job={job} setId={() => setJobId(job.id)}/>); })}
        </div>

        <div className="dot-switcher">
          {jobs.map((dotJob) => {
            return (<span className={jobId === dotJob.id ? "dot highlighted" : "dot"}/>);
          })}
        </div>
      </div>
    </section>
  );
}

interface JobProps {
  job: Job;
  setId: () => void;
}

function JobCard({job, setId}: JobProps) {
  useEffect(() => {
    const element = document.getElementById(job.id);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setId();
    });

    if (element) observer.observe(element);

    return () => observer.disconnect();
  // eslint-disable-next-line
  }, [job]);

  return (
    <div key={job.id} className="card" id={job.id}>
      <img src={job.logo} className="rounded logo" alt={job.name}/>

      <b className="subtitle">{job.date}</b>

      <div className="content">
        {job.items.map((item: any) => {
          return (
            <div className="item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;

import '../styles/Work.css';
import faire from '../icons/faire.avif';
import codeWithChris from '../icons/codewithchris.jpeg';
import vitalImages from '../icons/vital.jpeg';
import { useEffect, useState } from 'react';

const jobs = [
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
  const [skipIter, setSkipIter] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const job = jobs[jobIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (skipIter) {
        setSkipIter(false);
      } else {
        setJobIndex(i => (i + 1) % jobs.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <section id="work" className="work">
      <div className="switcher">
        <div className="scrolling-wrapper">
          <div key={job.id} className="card" id={job.id}>
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
          </div>
        </div>

        <div className="dot-switcher">
          {jobs.map((dotJob, dotJobIndex) => {
            return (
              <button 
                key={dotJob.id} 
                className={job.id === dotJob.id ? "dot highlighted" : "dot"} 
                onClick={() => { setSkipIter(true); setJobIndex(dotJobIndex); }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;

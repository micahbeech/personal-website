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
    url: "https://www.faire.com/",
    date: "2021 - Present",
    items: [
      {
        title: "DevOps",
        descriptions: [
          "Pipeline development, maintenance, and security.",
          "Experience with Docker, Gradle, and NPM registries.",
        ],
      },
      {
        title: "API Development",
        descriptions: [
          "RESTful APIs, backend services, and database schema.",
          "Design and implementation across the SDLC.",
        ],
      },
      {
        title: " iOS",
        descriptions: [
          "Native Swift development on a small team of scrappy engineers.",
          "Experience with SwiftUI, UIKit, Combine, and Universal Links."
        ],
      },
    ]
  },
  {
    id: "cwc",
    name: "Code With Chris",
    logo: codeWithChris,
    url: "https://codewithchris.com/",
    date: "2021 Internship",
    items: [
      {
        title: "Mobile App Design",
        descriptions: [
          "Envisioning, designing, and building apps from the ground up.",
        ],
      },
      {
        title: "iOS Frameworks",
        descriptions: [
          "State-of-the-art APIs.",
          "Core Data, Core ML, MapKit, Firebase, Google Sign-In, and the YouTube API.",
        ],
      },
      {
        title: "Content Creation",
        descriptions: [
          "Writing and recording course content for online iOS courses.",
        ],
      },
    ]
  },
  {
    id: "vital",
    name: "Vital Images",
    logo: vitalImages,
    url: "https://www.mi.medical.canon/",
    date: "2020 Internship",
    items: [
      {
        title: "Full Stack Engineering",
        descriptions: [
          "Server-side development in Java, Cassandra, and Elasticsearch.",
          "Admin tooling built using Angular.",
        ],
      },
      {
        title: "Healthcare Innovation",
        descriptions: [
          "Cutting-edge healthcare technology.",
          "DICOM and HL7 communication protocols.",
        ],
      },
      {
        title: "End-to-End Testing",
        descriptions: [
          "Assisted the QA team with E2E and regression testing to meet a crucial deadline.",
        ],
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
        // The index was changed manually,
        // so don't auto-rotate the job for another iteration of the timer
        setSkipIter(false);
      } else {
        setJobIndex(i => (i + 1) % jobs.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <section id="work">
      <div className="switcher">
        <div key={job.id} className="content" id={job.id}>
          <a href={job.url}>
            <img src={job.logo} className="rounded logo" alt={job.name}/>
          </a>
          
          <b className="subtitle">{job.date}</b>
    
          <div className="items">
            {job.items.map((item) => {
              return (
                <div key={item.title} className="card rounded">
                  <h2>{item.title}</h2>
                  {item.descriptions.map((description) => { 
                    return (<p key={description}>{description}</p>);
                  })}
                </div>
              );
            })}
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

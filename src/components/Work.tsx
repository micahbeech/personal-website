import '../styles/Work.css';
import faire from '../images/faire.avif';
import codeWithChris from '../images/codewithchris.jpeg';
import vitalImages from '../images/vital.jpeg';
import { useState } from 'react';

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
        title: "Server Side",
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
        title: "Mobile Design",
        descriptions: [
          "Native iOS development in Swift.",
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
        title: "Course Content",
        descriptions: [
          "Content creation for paid online tutorials.",
          "Recording video lessons and writing tutorial documentation.",
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
          "Assisted the QA team with E2E and regression testing.",
          "Automated tests created using Selenium.",
        ],
      },
    ]
  }
]

function Work() {
  const [jobIndex, setJobIndex] = useState(0);

  return (
    <div className="vbox page">
      {jobs.map((job, index) => {
        return (
          <div key={job.id} className={index === jobIndex ? "vbox content show" : "vbox content"} id={job.id}>
            <a href={job.url}>
              <img src={job.logo} className="rounded logo" alt={job.name}/>
            </a>
            
            <b className="subtitle">{job.date}</b>
      
            <div className="hbox items">
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
        );
      })}


      <div className="hbox dot-switcher">
        {jobs.map((dotJob, dotJobIndex) => {
          return (
            <button 
              key={dotJob.id} 
              className={jobIndex === dotJobIndex ? "dot highlighted" : "dot"} 
              onClick={() => { setJobIndex(dotJobIndex); }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;

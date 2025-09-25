import React from 'react';
import './App.css';
import profilePic from '/profile.jpg';

// --- for Job History ---
const JobEntry = ({ job }) => (
  <div className="experience-entry">
    <p className="timeline">{job.timeline}</p>
    <div className="deets">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <ul>
        {job.responsibilities.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Section Components ---

const Sidebar = ({ name, contact, skills }) => (
  <aside className="sidebar">
    <div className="sidebar-content">
      <img src={profilePic} alt="Profile" className="profile-picture" />
      <h1 className="name">{name}</h1>
      <section className="contact-info">
        <h2 className="sidebar-title">Contact</h2>
        <div className="item">
          <h3>Address</h3>
          <p>{contact.address}</p>
        </div>
        <div className="item">
          <h3>Phone</h3>
          <p>{contact.phone}</p>
        </div>
        <div className="item">
          <h3>E-mail</h3>
          <p>{contact.email}</p>
        </div>
      </section>
      <section className="skills-info">
        <h2 className="sidebar-title">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  </aside>
);


const Summary = ({ text }) => (
  <section className="summary-section">
    <p>{text}</p>
  </section>
);

const Education = ({ educationList }) => (
  <section className="main-section">
    <h2 className="main-title">Education</h2>
    {educationList.map((edu, index) => (
      <div className="education-entry" key={index}>
        <p className="timeline">{edu.timeline}</p>
        <div className="deets">
          <h3>{edu.degree}</h3>
          { }
          <p className="university">{edu.university}</p>
          <p className="highschool">{edu.highschool}</p>
        </div>
      </div>
    ))}
  </section>
);

const Experience = ({ jobs }) => (
  <section className="main-section">
    <h2 className="main-title">Experience / Projects</h2>
    {jobs.map((job, index) => (
      <JobEntry key={index} job={job} />
    ))}
  </section>
);


// --- Main App  ---

function App() {
  const resumeData = {
    name: "Lance Jerald Laxamana",
    contact: {
      address: "Arayat, Pampanga",
      phone: "+639946655743",
      email: "laxamanalance9@gmail.com",
    },
    skills: [
    "Proficient with version control using Git and GitHub for managing code in both individual and team-based academic projects.",
    "Developing practical experience in server-side logic and database management using technologies like Node.js, Django, and SQL.",
    "Adept at troubleshooting code and solving complex problems honed through various programming labs and coursework.",
    "Experience building applications for academic projects using Python, JavaScript, and C++, applying core Object-Oriented Programming (OOP) principles.",
    "A motivated and quick learner, passionate about exploring new technologies and continuously expanding my technical skill set.",
    "Proven ability to work effectively in a team environment, contributing to shared codebases and achieving project goals."
    ]
    summary: "Driven Information Technology student with hands-on experience in software development and database management. Seeking to apply a passion for problem-solving and a collaborative mindset to a challenging role. Dedicated to mastering new technologies and contributing to impactful projects.",
    education: [
      {
        timeline: "2023 - \nCurrent",
        degree: "Bachelor of Science in Information Technology",
        university: "University Of The Assumption - City of San Fernando, Pampanga",
      },
      {
        timeline: "2017 - 2023",
        degree: "Senior High School: Academic Track - Science, Technology, Engineering, and Mathematics (STEM)",
        highschool: "Arayat Holy Child Educational Foundation, Inc. - Arayat, Pampanga",
      },
    ],
    experience: [
      {
        timeline: "2025",
        title: "SSITE Cyberdragons Website",
        company: "Integrative Programming and Technologies 1",
        responsibilities: [
          "Developed a responsive website for the SSITE Department using HTML, CSS, and JavaScript.",
          "Implemented user authentication and registration features.",
          "Collaborated with team members(classmates) to ensure timely project completion.",
        ],
      },
      {
        timeline: "2023",
        title: "Shootman Game",
        company: "Programming 1",
        responsibilities: [
          "Developer of a 2D shooting game using Python and Pygame library.",
          "Reviewed the integrated project and documentation",
          "Ensured the project met all requirements and standards",
        ],
      },
    ],
  };

  return (
    <div className="wrapper">
      <Sidebar
        name={resumeData.name}
        contact={resumeData.contact}
        skills={resumeData.skills}
      />
      <main className="main-display">
        <Summary text={resumeData.summary} />
        <Education educationList={resumeData.education} />
        <Experience jobs={resumeData.experience} />
      </main>
    </div>
  );
}

export default App;

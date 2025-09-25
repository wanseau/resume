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
      "Knowledge of JavaScript, Python, and C++ and object-oriented principles.",
      "Familiar with back-end technologies including Django, SQL, and node.js.",
      "Familiar with collaborative development using Git and GitHub.",
      "Strong analytical and critical-thinking skills.",
      "Proven team player with experience in collaborative projects.",
      "Adaptable and eager to embrace new technologies.",
    ],
    summary: "Aspiring IT professional with a solid foundation in programming and web development. Eager to contribute technical skills and a strong work ethic to a dynamic team. Committed to continuous learning and growth in the ever-evolving field of technology.",
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
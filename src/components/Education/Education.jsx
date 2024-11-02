import React from "react";
import "./Education.css"; // Make sure to create this CSS file
import EducationCard from "./EducationCard";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2019 - 2023",
      description:
        "Focused on software engineering, data structures, and web development. Completed multiple projects, including a capstone project that involved building a full-stack web application."
    },
    {
      degree: "Full Stack Development Bootcamp",
      institution: "ABC Institute",
      year: "2022",
      description:
        "Intensive program covering modern web technologies, frameworks, and best practices. Worked on team-based projects and individual assignments to build robust web applications."
    },
    {
      degree: "Certified AWS Solutions Architect",
      institution: "Online Certification",
      year: "2023",
      description:
        "Earned certification demonstrating proficiency in AWS services, architecture best practices, and security management."
    }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-cards">
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

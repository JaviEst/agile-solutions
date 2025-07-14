import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./about.css";

const team = [
  {
    name: "Brendan",
    title: "Product Owner",
    img: "/brendan.jpg", // Replace with actual image path
    bio: "Brendan leads the vision and value delivery of our Agile platform. He ensures alignment between user needs and business goals, collaborates with stakeholders, and prioritizes product backlogs for maximum impact."
  },
  {
    name: "Karen",
    title: "Scrum Master",
    img: "/karen.jpg", // Replace with actual image path
    bio: "Karen facilitates our Scrum ceremonies and champions Agile principles across the team. She removes impediments, fosters team collaboration, and ensures sprint success through continuous improvement."
  },
  {
    name: "Ishaan",
    title: "UX Designer",
    img: "/ishaan.jpg", // Replace with actual image path
    bio: "Ishaan designs intuitive user interfaces and user journeys. He ensures accessibility, usability, and visual consistency across pages and components using Agile design sprints and continuous feedback."
  },
  {
    name: "Javier",
    title: "Developer",
    img: "/alex.jpg", // Replace with actual image path
    bio: "Alex is responsible for ensuring the quality and reliability of our products. He develops and executes test plans, identifies bugs, and works closely with the team to deliver a seamless user experience."
  },
  {
    name: "David",
    title: "Developer",
    img: "/priya.jpg", // Replace with actual image path
    bio: "Priya coaches teams and individuals on Agile best practices. She helps foster a culture of continuous improvement and supports the adoption of Agile methodologies across the organization."
  },
  {
    name: "Huiru",
    title: "QA Engineer",
    img: "/miguel.jpg", // Replace with actual image path
    bio: "Miguel manages our DevOps processes and infrastructure. He automates deployments, monitors system health, and ensures our platform is scalable and reliable."
  }
];

const AboutPage = () => (
  <>
    <Header />
    <main className="about-main">
      <div className="about-container">
        <img src="/about_home.png" alt="Agile Solutions Office" className="about-hero-img" />
        <div className="about-story">
          <p>Agile Solutions was founded with a singular vision: to help organizations navigate the complexities of digital transformation through the lens of Agile, Lean, and DevOps practices. What started as a collaborative academic project in Boston University's METCS 634: Agile Software Development course under the guidance of Professor Raj Hedu, quickly evolved into a complete simulation of a modern Agile consulting firm.</p>
          <p>The team behind Agile Solutions — a diverse group of aspiring professionals with roles ranging from Product Ownership to UI/UX Design and Quality Assurance — came together with the goal of designing a real-world-ready web platform that mirrors how successful Agile organizations operate.</p>
          <p>Throughout the process, Agile Solutions stayed true to the Agile mindset: responding to change over following a rigid plan. Using iterative sprints, feedback loops, and collaborative decision-making, the team built a scalable, user-friendly web presence — from wireframes to working UI components — that now serves as a blueprint for enterprise agility.</p>
          <p>While Agile Solutions remains a course-based simulation, its foundation rests on the very principles it promotes — transparency, collaboration, adaptation, and delivering value early and often. It stands as a proud representation of how academic excellence, industry frameworks, and creative design can come together to shape a working model of digital transformation.</p>
        </div>
        <section className="about-who-what">
          <h2 className="about-section-title about-section-title-large">Who we are?</h2>
          <div className="about-who-text">
            <p>Agile Solutions is a forward-thinking consultancy committed to helping individuals, teams, and enterprises unlock their full potential through the power of Agile. We are a collective of certified Agile coaches, ScrumMasters, trainers, and digital transformation specialists who bring decades of hands-on experience.</p>
            <p>Rooted in the principles of transparency, collaboration, and continuous improvement, we provide end-to-end Agile services, ranging from foundational training to enterprise-level coaching and Agile transformation strategies. Our solutions are tailored to meet the unique needs of your organization, whether you're a startup aiming for rapid delivery or a large enterprise embracing scaled Agile frameworks.</p>
          </div>
          <h2 className="about-section-title about-section-title-large">What we do?</h2>
          <div className="about-what-text">
            <p>At Agile Solutions, we deliver comprehensive Agile services that support organizations at every stage of their transformation journey. Our core offerings include Agile training, coaching, strategic consulting, and hands-on facilitation to ensure that Agile principles are not only understood but effectively applied across your teams.</p>
            <p>We design and implement customized programs that span team-level agility, leadership alignment, product management excellence, and enterprise agility. Whether launching Agile pilots, scaling frameworks like SAFe or LeSS, or embedding DevOps and Lean practices, we provide the tools, guidance, and frameworks to turn Agile theory.</p>
          </div>
        </section>
        <h2 className="about-section-title">Meet Our Team</h2>
        <div className="about-team">
          {team.map(member => (
            <div className="about-team-member" key={member.name}>
              <img src={member.img} alt={member.name} className="about-team-img" />
              <div className="about-team-info">
                <div className="about-team-name">{member.name}</div>
                <div className="about-team-title">{member.title}</div>
                <div className="about-team-bio">{member.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutPage; 
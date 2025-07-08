import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactButton from '../components/buttons/contactusbutton';
import SectionCards from '../components/sectioncards/SectionCards';
import './coaching.css';

const agileCards = [
  {
    image: '/agile_team_coaching.png',
    title: 'Agile Team Coaching',
    description: 'Empower your teams with Agile methodologies, enhancing their productivity and responsiveness.'
  },
  {
    image: '/agile_leadership_coaching.png',
    title: 'Agile Leadership Coaching',
    description: 'Develop Agile leaders who can champion change and drive Agile adoption across the organization.'
  },
  {
    image: '/agile_executive_coaching.png',
    title: 'Agile Coaching for Executives',
    description: 'Equip executives with the strategic insights to lead Agile transformations and achieve business agility.'
  }
];

const devopsCards = [
  {
    image: '/devops_team_coaching.png',
    title: 'DevOps Team Coaching',
    description: 'Optimize your development and operations teams with DevOps practices, streamlining workflows and enhancing collaboration.'
  },
  {
    image: '/devops_leadership_coaching.png',
    title: 'DevOps Leadership Coaching',
    description: 'Cultivate DevOps leaders who can drive the adoption of DevOps principles and practices within their teams.'
  },
  {
    image: '/devops_executive_coaching.png',
    title: 'DevOps Coaching for Executives',
    description: 'Provide executives with the strategic vision to lead DevOps transformations and achieve operational excellence.'
  }
];

const toolsCards = [
  {
    image: '/agile_tool_coaching.png',
    title: 'Agile Tool Assessments',
    description: 'Evaluate your current toolset and identify opportunities for improvement with our comprehensive Agile tool assessments.'
  },
  {
    image: '/devops_tool_coaching.png',
    title: 'DevOps Tool Assessments',
    description: 'Assess your DevOps tool landscape and identify the best tools to support your continuous delivery pipeline.'
  },
  {
    image: '/implementation_support_coaching.png',
    title: 'Implementation Support',
    description: 'Receive expert support during implementation of new tools, ensuring a seamless integration with your existing systems.'
  }
];

const CoachingHeroSection = () => (
  <section className="coaching-hero">
  <div className="coaching-hero-bg">
    <div className="coaching-hero-overlay">
      <div className="coaching-hero-content">
        <h1 className="coaching-hero-title">Coaching</h1>
        <p className="coaching-hero-subtitle">
          Empowering teams to achieve peak performance through expert Agile coaching and guidance.
        </p>
        <ContactButton>Explore Coaching Services</ContactButton>
      </div>
    </div>
  </div>
</section>
);

const AgileTransformationSection = () => (
  <div className="coaching-section coaching-section--agile">
    <SectionCards
      heading="Agile Transformation"
      description="Want to introduce the power of Agile to your organization? Our coaches can work with your teams to bring them up to speed. We will define the roles and responsibilities of the various team members and stakeholders, assist with implementing Agile practices including Scrum, Kanban and Lean, and help to position your group into moving ahead on your own."
      cards={agileCards}
      cardBackground="F4D39A45"
    />
  </div>
);

const DevOpsTransformationSection = () => (
  <div className="coaching-section coaching-section--devops">
   <SectionCards
      heading="DevOps Transformation"
      description="Combining both software development and operations, an Agile DevOps environment maximizes productivity by coordinating a shared vision. This enables your organization to cooperate on a common set of tools and practices, from planning to maintenance."
      cards={devopsCards}
      cardBackground="D5A0A069"
    />
  </div>
);

const ToolsAssessmentSection = () => (
  <div className="coaching-section coaching-section--tools">
    <SectionCards
      heading="Tools Assessment and Implementation"
      description="Agile is a set of principles – there are a plethora of tools available, but which ones are best for your specific needs and goals? With this coaching session, we help you assess your current toolset and your organization’s strengths and challenges, and we assemble a collection of tools specific to your requirements."
      cards={toolsCards}
      cardBackground="F3E9E9"
    />
  </div>
);

const CoachingContactSection = () => (
  <div className="coaching-contact-btn-wrapper">
    <ContactButton>Contact Us</ContactButton>
  </div>
);

const Coaching = () => (
  <div className="coaching-page">
    <Header />
    <CoachingHeroSection />
    <AgileTransformationSection />
    <DevOpsTransformationSection />
    <ToolsAssessmentSection />
    <CoachingContactSection />
    <Footer />
  </div>
);

export default Coaching; 
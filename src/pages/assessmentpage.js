import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactButton from '../components/buttons/contactusbutton';
import styles from './assessmentpage.css';

const AssessmentTopSection = () => (
  <section className="assessment-hero">
    <div className="assessment-hero-inner">
      <div className="assessment-hero-image-container">
        <img
          src="/assessment.png"
          alt="Assessment"
          className="assessment-hero-image"
        />
      </div>
      <div className="assessment-hero-content">
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ContactButton>Contact Us</ContactButton>
        </div>
        <h1 className="assessment-hero-title">Why Assessment?</h1>
        <p className="assessment-hero-desc">
          Today, more and more companies are adopting iterative software design methodologies like Agile. Whether you are just starting on this journey or if you already have adopted many agile techniques, it’s vitally important to first understand where you are so you know what you need to do. As we have done for so many other companies, Apex can be your partner in assessing your current capability, to help remediate those areas needing correction, and to create a plan for upgrading skills on your Agile journey.
        </p>
        <br />
        <p className="assessment-hero-desc">
          While you may find a number of skill surveys online, Apex offers six comprehensive Agile skill assessments to pinpoint your current capabilities. We drew upon our extensive background in software development to create, from scratch, assessments that reflect actual business environments. Following your assessment, Apex will work with you to provide both individualized and customized coaching; Apex complements our customized training with a number of certification-oriented training programs.
        </p>
        <br />
        <p className="assessment-hero-desc">
          The Apex assessments contain both prescriptive and proscriptive components. We can recognize those patterns and behaviors in your organization that have you on the right track to improving your agility. As experts in agile software development with decades of industry experience in business like yours, we can identify those behaviors that you will want to build upon. Equally important, our experience as developers and leaders within the software industry will allow us to recognize other patterns and behaviors that are detracting from your business and development agility.
        </p>
      </div>
    </div>
  </section>
);

const AssessmentBottomSection = () => (
  <section className="assessment-types-section">
    <div className="assessment-types-inner">
      <h2 className="assessment-types-title">What are the different types of assessment?</h2>
      <div className="assessment-types-content">
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Leadership Assessment</h3>
            <p className="assessment-type-desc">
              The effectiveness of Agile development efforts will be either magnified or diminished by your organization’s leaders. The Apex leadership assessment quantitatively assesses the skills and capabilities of your leadership team. As outlined in the Agile Manifesto, the following principles are of paramount importance to leaders. First, producing value: does leadership recognize that the production of value over the production of features? Second, encouraging change: does leadership not only welcome change, and not only encourage change, but actually reward change? And third, deliver frequently: does leadership guide the organization to processes conducive to continuous improvement and delivery? Apex’s leadership assessment comprehensively surveys leadership skill in your organization, and it produces recommendations to get leadership on the right track to agility.
            </p>
          </div>
          <img
            src="/leadership_assessment.png"
            alt="Formative Assessment"
            className="assessment-type-image"
          />
        </div>
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Organization Assessment</h3>
            <p className="assessment-type-desc">
              As important as Agile is to your software development teams, many of the same principles apply to your organization. The Apex Organization Assessment will measure your current capabilities as an Agile organization. We will identify those areas where you are on the right track as well as those where you are following practices that are counterproductive. Like a tried and true family recipe, we have distilled our decades of experience in the software industry to create a comprehensive assessment of software development practices. Among others metrics, we assess the following key capabilities: value: do each your product releases produce recognizable and useful value for the customer; openness to change: are your organizations receptive and encouraging of changing requirements, both early and late in the product cycle; and frequent deliveries via a continuous improvement and delivery pipeline.
            </p>
          </div>
          <img
            src="/organization_assessment.png"
            alt="Summative Assessment"
            className="assessment-type-image"
          />
        </div>
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Portfolio Assessment</h3>
            <p className="assessment-type-desc">
              Rarely does a company produce a single product or feature that is divorced from other cooperating products. In an organization with multiple and simultaneous development efforts, a siloed approach to product development becomes counterproductive. Do your product teams operate independently or is there a cooperative spirit aligning your goals? Is progress gated by milestones and measured by the number of tasks completed? Many of the same techniques you apply to iterative software development also apply to portfolio management. Our portfolio assessment ascertains where you sit on an Agile spectrum and more importantly, what practices can you adopt that will bring value, openness to change, and improved delivery to your product portfolio.
            </p>
          </div>
          <img
            src="/portfolio_assessment.png"
            alt="Diagnostic Assessment"
            className="assessment-type-image"
          />
        </div>
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Program Assessment</h3>
            <p className="assessment-type-desc">
              The Apex program assessment evaluates how well your program development strategy aligns with your product portfolio. In an organization with multiple simultaneous development streams, cooperation and good intentions alone will not produce intended results. Apex measures the engagement of program stakeholders and analyzes strategies for predictability and problem resolution. Apex looks at program planning – is it synchronized with the other programs in your enterprise portfolio? The Apex program assessment measures the propensity of your program to exist cooperatively within the portfolio and deliver value while being open to change.
            </p>
          </div>
          <img
            src="/program_assessment.png"
            alt="Ipsative Assessment"
            className="assessment-type-image"
          />
        </div>
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Team Assessment</h3>
            <p className="assessment-type-desc">
            There are two important considerations. First, there is no perfect team environment. Second, creating an environment where teams can thrive takes a lot of work. The Apex Team Assessment looks at the makeup and dynamics of an individual agile team. We ascertain to what degree has the team jelled or what obstacles may be preventing that from occurring. We look at the team dynamics: how much trust is there between team members? Is there a team culture, and if so, is the culture beneficial to, or detrimental to, the team’s success? Does the team feel empowered to deliver great products? Apex’s decades of experience in Agile organizations allows us to recognize and assess those aspects of teamwork that encourage producing value, being open to change, and allow for continuous improvement and delivery.
            </p>
          </div>
          <img
            src="/team_assessment.png"
            alt="Ipsative Assessment"
            className="assessment-type-image"
          />
        </div>
        <div className="assessment-type-card">
          <div className="assessment-type-text">
            <h3 className="assessment-type-heading">Individual Role/Talent Assessment</h3>
            <p className="assessment-type-desc">
            Apex in-house experts are not just experts in the Agile development methodology, but we have earned that expertise from decades of experience in multiple software industries. We know individuals like your key contributors because we have also been key contributors. Drawing from deep domain expertise, Apex can assess the capabilities of key individuals within your organization. The core Agile principles of delivering value, openness to change, and improving delivery represent transformative skills and behavior. Our assessments first measures where your key contributors are on an Agile spectrum. In addition, the assessment produces concrete recommendations for help them achieve excellence.
            </p>
          </div>
          <img
            src="/role_assessment.png"
            alt="Ipsative Assessment"
            className="assessment-type-image"
          />
        </div>
      </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContactButton>Contact Us</ContactButton>
        </div>
    </div>
  </section>
);


const AssessmentPage = () => (
  <main className={styles.assessmentPage}>
    <Header />
    <div className={styles.container}>
      <AssessmentTopSection />
      <AssessmentBottomSection />
    </div>
    <Footer />
  </main>
);

export default AssessmentPage;
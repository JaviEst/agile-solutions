import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './home.css';
import Carousel from '../components/carousel/Carousel';
import { FaRegUserCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Assessment',
    description: 'Apex agile experts can perform an Agile Maturity Assessment for your company. We thoroughly study your business organization and measure how the software development practices you follow conform to the Agile Manifesto’s 12 Agile Principles.'
  },
  {
    title: 'Coaching',
    description: 'Working one on one with your own technology leaders, Apex experts share our decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs.'
  },
  {
    title: 'Training',
    description: 'Apex coursework will thoroughly prepare you for Agile certification. Having worked side-by-side with the three elite certification agencies, we know just what you will need to gain certifications from the three important certification organizations: SAFe, Scrum.org, and Scrum Alliance.'
  }
];

const testimonials = [
  {
    image: "testimonial_home1.png",
    quote: '“This training transformed our team’s approach to projects.”'
  },
  {
    image: "testimonial_home2.png",
    quote: '“The coaching sessions were invaluable for our Agile adoption.”'
  },
  {
    image: "testimonial_home3.png",
    quote: '“The workshops were engaging and highly informative.”'
  },
  {
    image: "testimonial_home4.png",
    quote: '“We saw immediate improvements in our workflow after the training.”'
  }
];

function ServicesSection() {
  // Replace these with your actual SVGs or images
  const serviceImages = [
    '/assessment_home.png', // Replace with your actual SVG path
    '/coaching_home.png',
    '/training_home.png'
  ];
  return (
    <section className="services-section">
      <div className="container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-cards">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-image-box">
                <img src={serviceImages[i] || s.image} alt={s.title} className="service-image" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="home-about">
      <h1 className="home-section-title">ABOUT US</h1>
      <div className="about-contact-row">
        <div className="about-main-col">
          <div className="home-about-block">
            <h3 className="home-about-subtitle home-about-subtitle-left">Who we are?</h3>
            <p className="home-about-text" style={{ marginBottom: '1.2rem' }}>
              Agile Solutions is a forward-thinking consultancy committed to helping individuals, teams, and enterprises unlock their full potential through the power of Agile. We are a collective of certified Agile coaches, ScrumMasters, trainers, and digital transformation specialists who bring decades of hands-on experience.<br /><br />
              Rooted in the principles of transparency, collaboration, and continuous improvement, we provide end-to-end Agile services, ranging from foundational training to enterprise-level coaching and Agile transformation strategies. Our solutions are tailored to meet the unique needs of your organization, whether you're a startup aiming for rapid delivery or a large enterprise embracing scaled Agile frameworks.
            </p>
          </div>
          <div className="home-about-block">
            <h3 className="home-about-subtitle home-about-subtitle-left">What we do?</h3>
            <p className="home-about-text">
              At Agile Solutions, we deliver comprehensive Agile services that support organizations at every stage of their transformation journey. Our core offerings include Agile training, coaching, strategic consulting, and hands-on facilitation to ensure that Agile principles are not only understood but effectively applied across your teams.<br /><br />
              We design and implement customized programs that span team-level agility, leadership alignment, product management excellence, and enterprise agility. Whether launching Agile pilots, scaling frameworks like SAFe or LeSS, or embedding DevOps and Lean practices, we provide the tools, guidance, and frameworks to turn Agile theory.
            </p>
          </div>
        </div>
        <div>
          <div className="about-contact-icon-outer">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/jiankangxian/contact-us-20.png" className="about-contact-icon" alt="Contact Icon" />
          </div>
          <div className="about-contact-box">
            <div className="about-contact-title">Contact us :</div>
            <div className="about-contact-details">
              Agile Solutions, 685<br />
              Commonwealth Avenue, Boston<br />
              University - 02134<br />
              Contact : 857-832-8493
            </div>
            <div className="about-contact-email">
              email : agilesolutions@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partnerImages = [
    'safe_home.png',
    'https://s3-eu-west-1.amazonaws.com/tpd/logos/590649990000ff0005a1885a/0x0.png',
    'scrumorg_home.png'
  ];
  const partnerLinks = [
    'https://framework.scaledagile.com/',
    'https://www.scrumalliance.org',
    'https://www.scrum.org/'
  ];
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-divider" />
        <h1 className="partners-title">Our Partners</h1>
        <div className="partners-logos">
          {partnerImages.map((img, i) => (
            <div className="partner-logo-box" key={i}>
              <a href={partnerLinks[i]} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={`Partner ${i + 1}`} className="partner-logo" />
              </a>
            </div>
          ))}
        </div>
        <div className="partners-divider" />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h1 className="testimonials-title">Get Inspired</h1>
        <div className="testimonials-cards">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.image} alt="Testimonial avatar" className="testimonial-image" />
              <div className="testimonial-quote">{t.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignUpSection() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function validate() {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (!consent) errs.consent = 'You must permit us to email you.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    // TODO: Implement email sending logic here (API call or email service)
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setConsent(false);
      setSubmitted(false);
    }, 1500);
  }

  return (
    <section className="signup-section">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h1 className="signup-title">Stay Connected with us...</h1>
        <div className="signup-subtitle">Receive information on upcoming workshops and insights</div>
        <input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        {submitted && errors.name && <div className="signup-error">{errors.name}</div>}
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {submitted && errors.email && <div className="signup-error">{errors.email}</div>}
        <label className="signup-checkbox-label">
          <input
            className="signup-checkbox"
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            required
          />
          <span>I am permitting you to email me</span>
        </label>
        {submitted && errors.consent && <div className="signup-error">{errors.consent}</div>}
        <button className="signup-btn" type="submit" disabled={sending}>
          {sending ? 'Signing Up...' : 'Sign Up'}
        </button>
        {success && <div className="signup-success">Thank you for signing up! Please check your email.</div>}
      </form>
    </section>
  );
}

const HomePage = () => (
  <>
    <Header />
    <main className="home-main">
      <Carousel />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <TestimonialsSection />
      <SignUpSection />
    </main>
    <Footer />
  </>
);

export default HomePage;

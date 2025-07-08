import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  {
    subheading: (
      <span style={{ fontSize: '1.3rem', color: '#222', fontFamily: 'inherit', display: 'block', marginTop: '1rem' }}>
        Apex is a boutique Agile consultancy with decades of software development experience. We grew up in the era of structured design methodologies, adapted our learning to the rapid development approaches, and graduated to Agile. Wherever you are in your software evolution, we are there to help in your journey.
      </span>
    ),
    image: '/about_home.png',
    button: {
      text: 'Collaborate',
      link: '/',
    },
    imageAlt: 'About Us',
  },
  {
    subheading: (
      <span style={{ fontSize: '1.3rem', color: '#222', fontFamily: 'inherit', display: 'block', marginTop: '1rem' }}>
        Apex agile experts can perform an Agile Maturity Assessment for your company. We thoroughly study your business organization and measure how the software development practices you follow conform to the Agile Manifesto's 12 Agile Principles.
      </span>
    ),
    image: '/schedule_assessment_home.png',
    button: {
      text: 'Schedule an assessment',
      link: '/assessment',
    },
    imageAlt: 'Schedule an Assessment',
  },
  {
    subheading: (
      <span style={{ fontSize: '1.3rem', color: '#222', fontFamily: 'inherit', display: 'block', marginTop: '1rem' }}>
        Apex coursework will thoroughly prepare you for Agile certification. Having worked side-by- side with the three elite certification agencies, we know just what you will need to gain certification from the three important certification organizations SAFe, Scrum.org, and Scrum Alliance.
      </span>
    ),
    image: '/courses_home.png',
    button: {
      text: 'View Courses',
      link: '/courses',
    },
    imageAlt: 'Courses',
  },
  {
    subheading: (
      <span style={{ fontSize: '1.3rem', color: '#222', fontFamily: 'inherit', display: 'block', marginTop: '1rem' }}>
        Working one on one with your own technology leaders, Apex experts share our decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs.
      </span>
    ),
    image: '/coaching_carousel_home.png',
    button: {
      text: 'Our Offerings',
      link: '/coaching',
    },
    imageAlt: 'Coaching',
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const goTo = idx => setActive(idx);
  const prev = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);

  return (
    <div className="carousel-container">
      <div className="carousel-card">
        <div className="carousel-card-content">
          <div className="carousel-heading">{slides[active].heading}</div>
          <div className="carousel-subheading">{slides[active].subheading}</div>
          <div className="carousel-image-block">
            <img src={slides[active].image} alt={slides[active].imageAlt} className="carousel-image" />
            {slides[active].button && (
              <div className="carousel-image-btn-wrapper">
                <a href={slides[active].button.link} className="carousel-btn">
                  {slides[active].button.text}
                </a>
              </div>
            )}
          </div>
        </div>
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous Slide">&#8592;</button>
        <button className="carousel-arrow right" onClick={next} aria-label="Next Slide">&#8594;</button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot${active === idx ? ' active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 
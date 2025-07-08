import React from 'react';
import './SectionCards.css';

const SectionCards = ({ heading, description, cards, cardBackground = '#fff' }) => (
  <section className="section-cards">
    <h2 className="section-cards__heading">{heading}</h2>
    {description && (
      <div className="section-cards__desc-block">
        <p className="section-cards__desc-justified">{description}</p>
      </div>
    )}
    <div className="section-cards__cards">
      {cards.map((card, idx) => (
        <div className="section-cards__card" key={idx} style={{ background: cardBackground }}>
          <img src={card.image} alt={card.title} className="section-cards__image" />
          <h3 className="section-cards__title">{card.title}</h3>
          <p className="section-cards__desc">{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SectionCards; 
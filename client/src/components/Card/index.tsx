import React from 'react';

// Styles
import './index.scss';

interface CardProps {
  card: {
    id: number;
    image: string,
    title: string,
    desc: string,
  };
  key: string | number;
}

const Card = ({ card, key }: CardProps) => {
  return (
    <div className="card" key={key}>
      <div className="card__fader"/>
      <div className="card__background" style={{ backgroundImage: `url(${card.image})` }}/>
      <span className="card__tag">{`STEP ${card.id}`}</span>
      <span className="card__title">{card.title}</span>
      <span className="card__desc">{card.desc}</span>
    </div>
  )
}

export default Card;
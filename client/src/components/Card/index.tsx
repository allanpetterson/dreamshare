import React from 'react';

// Constants
import { CardIF } from '../../constants/Data';

// Styles
import './index.scss';

const Card = ({ card, key }: { card: CardIF, key: number }) => (<div className="card" key={key}>
  <div className="card__fader" />
  <div className="card__background" style={{ backgroundImage: `url(${card.image})` }} />
  <span className="card__tag">{`STEP ${card.id}`}</span>
  <span className="card__title">{card.title}</span>
  <span className="card__desc">{card.desc}</span>
</div>)

export default Card;
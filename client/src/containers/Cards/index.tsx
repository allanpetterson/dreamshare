import React from 'react';
import { connect } from 'react-redux';
import Slider, { Settings } from 'react-slick';

// Constants
import { Dictionary, CardIF } from '../../constants/Data';

// Components
import Card from '../../components/Card';

// Styles
import './index.scss';

interface CardsContainerProps {
  cards: CardIF[];
  processing: boolean;
}

const CardsContainer = ({ cards, processing }: CardsContainerProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      },
    ],

  };

  if (processing)
    return null;

  return (
    <div className="cards-container">
      <span className="section__title">{Dictionary.CARDS_TITLE}</span>
      <Slider {...settings}>
        {
          cards.map((card, i) => {
            return (
              <Card card={card}
                key={i} />
            )
          })
        }
      </Slider>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { cards, processing, error } = state;

  return ({
    cards,
    processing,
    error,
  });
};

export default connect(mapStateToProps)(CardsContainer);

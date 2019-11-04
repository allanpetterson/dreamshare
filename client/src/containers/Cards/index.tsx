import React from 'react';
import Slider, { Settings } from 'react-slick';

// Constants
import { Cards, Dictionary } from '../../constants/Data';

// Components
import Card from '../../components/Card';

// Styles
import './index.scss';

const CardsContainer = () => {


  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      },
    ],

  };

  return (
    <div className="cards-container">
      <span className="section__title">{Dictionary.CARDS_TITLE}</span>
      <Slider {...settings}>
        {
          Cards.map((card, i) => {
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

export default CardsContainer;

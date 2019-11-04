import React from 'react';

// Constants
import {Dictionary, Cards} from '../../constants/Data';

// Components
import Card from '../../components/Card';
import Section from '../../components/Section';

const CardsContainer = () => {
    return (
        <Section title={
            Dictionary.CARDS_TITLE
        }
        items={
            Cards.map((card, i) => {
                return (
                    <Card card={card}
                        key={i}/>
                )
            })
        }/>
    )
}

export default CardsContainer;

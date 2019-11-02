import React, {Component} from 'react';

// Components
import Header from '../../components/Header';

// Styles
import './index.scss';
import HeroBanner from '../../components/HeroBanner';
import {Dictionary, Cards} from '../../constants/Data';

export default class Home extends Component {
    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <HeroBanner/>
                <div className="cards-container">
                    <span className="cards-container__title">
                        {
                        Dictionary.CARDS_TITLE
                    } </span>
                    <div className="cards-container__items">
                        {
                        Cards.map((card, i) => {
                            return (
                                <div className="card">
                                    <div className="card__fader"/>
                                    <div className="card__background" style={{ backgroundImage: `url(${card.image})` }}/>
                                    <span className="card__tag">{`STEP ${card.id}`}</span>
                                    <span className="card__title">{card.title}</span>
                                    <span className="card__desc">{card.desc}</span>
                                </div>
                            )
                        })
                    } </div>
                </div>
            </div>
        );
    }
}

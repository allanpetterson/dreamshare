import React, {Component} from 'react';

// Components
import Header from '../../components/Header';
import HeroBanner from '../../components/HeroBanner';

// Styles
import './index.scss';

// Containers
import CardsContainer from '../../containers/Cards';
import PersonasContainer from '../../containers/Personas';
import MaillingContainer from '../../containers/Mailling';
import Logo from '../../components/Logo';

const footerData = [
    'About',
    'Contact',
    'Press',
    'Blog',
    'Terms and privacy',
    'Help'
];

export default class Home extends Component {
    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <HeroBanner/>
                <CardsContainer/>
                <PersonasContainer/>
                <MaillingContainer/>
                <div className="footer">
                    <Logo primary/>
                    <div className="footer__links-container">
                        <span className="footer__links-title">Company</span>
                        <div className="footer__links">
                            {
                            footerData.map((link) => <span className="footer__link">
                                {link}</span>)
                        } </div>
                    </div>
                </div>
            </div>
        );
    }
}

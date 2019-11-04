import React, {Component} from 'react';

// Components
import Header from '../../components/Header';
import HeroBanner from '../../components/HeroBanner';
import Footer from '../../components/Footer';

// Styles
import './index.scss';

// Containers
import CardsContainer from '../../containers/Cards';
import PersonasContainer from '../../containers/Personas';
import MaillingContainer from '../../containers/Mailling';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <HeroBanner/>
            <CardsContainer/>
            <PersonasContainer/>
            <MaillingContainer/>
            <Footer/>
        </div>
    );
}

export default Home;

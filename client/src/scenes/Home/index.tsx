import React, {Component} from 'react';

// Components
import Header from '../../components/Header';

// Styles
import './index.scss';
import HeroBanner from '../../components/HeroBanner';

export default class Home extends Component {
    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <HeroBanner/>
            </div>
        );
    }
}

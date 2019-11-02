import React from 'react';
import Button from '../Button';
import {DataBanner} from '../../constants/HeroBanner';

// Styles
import './index.scss';

const HeroBanner: React.FC = () => (
    <div className="hero-banner">
        <div className="hero-banner__background"/>
        <span className="hero-banner__title"
            dangerouslySetInnerHTML={
                {__html: DataBanner.TITLE}
            }/>
        <span className="hero-banner__description">
            {
            DataBanner.DESC
        }</span>
        <Button variant="contained"> {
            DataBanner.BUTTON
        } </Button>
    </div>
);

export default HeroBanner;

import React from 'react';
import Button from '../Button';

// Styles
import './index.scss';
import { Dictionary } from '../../constants/Data';

const HeroBanner: React.FC = () => (
    <div className="hero-banner">
        <div className="hero-banner__background"/>
        <span className="hero-banner__title"
            dangerouslySetInnerHTML={
                {__html: Dictionary.BANNER_TITLE}
            }/>
        <span className="hero-banner__description">
            {
            Dictionary.BANNER_DESC
        }</span>
        <Button variant="contained"> {
            Dictionary.BANNER_BUTTON
        } </Button>
    </div>
);

export default HeroBanner;
